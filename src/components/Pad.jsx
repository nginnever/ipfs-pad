import React from 'react'
import ReactDOM from 'react-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {Editor, EditorState} from 'draft-js'

export const Pad = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState: function() {
  	return { editorState: EditorState.createEmpty() }
  },
  onChange: function(editorState) {
  	this.setState({editorState})
  },
  render: function() {
  	console.log(this.state)
    console.log(this.props)
    return (
      <div id="content">
        <h3>IPFS PAD</h3>
        <div className="editor">
		      <div style={Object.assign(this.props.style, {
		          display: 'flex'
		        })}>
		        <ol className="custom">
		          {[...Array(this.state.editorState.getCurrentContent().getBlockMap().size)].map((x, i) =>
		            <li key={i} className="lineNum" />
		          )}
		        </ol>
		        <div style={{flex: 1}}>
		          <Editor {...this.props.editor}
		            editorState={this.state.editorState}
		            onChange={(editorState) => { this.onChange(editorState)}} />
		        </div>
          </div>
        </div>
      </div>
    )
  }
})

function mapStateToProps(state) {
	console.log(state.toJSON())
  return state.toJSON()
}

export const PadContainer = connect(mapStateToProps)(Pad)
