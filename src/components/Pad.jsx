import React from 'react'
import ReactDOM from 'react-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'

export const Pad = React.createClass({
  mixins: [PureRenderMixin],
  componentDidMount: function() {
    console.log(this.props.params.id)
  },
  render: function() {
    return (
      <div>
        <h1>{this.props.params.id}</h1>
      </div>
    )
  }
})

function mapStateToProps(state) {
  console.log(state.toJSON())
  return state.toJSON()
}

export const PadContainer = connect(mapStateToProps)(Pad)
