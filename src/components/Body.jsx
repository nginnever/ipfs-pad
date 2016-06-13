import React from 'react'
import ReactDOM from 'react-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SubList from './SubList'
import SubListPost from './SubListPost'
import Home from './Home'

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
  	let body
  	switch(this.props.content.route) {
	  	case 'subView':
	  	  body = <SubList items={this.props.items} setSelectedBody={this.props.setSelectedBody} turbaIndex={this.props.content.turbaIndex} />
	  	  break
	  	case 'home':
	  	  body = <Home />
	  	  break
	  	case 'SubPost':
	  	  body = <SubListPost post={this.props.content.subListPost}/>
	  	  break
  	}

    return (
      <div>
        {body}
      </div>
    )
  }
})