import React from 'react'
import ReactDOM from 'react-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
  	if (this.props.post.subItemPosts) {
	    var subNodes = this.props.post.data.subItemPosts.map((item, index) => {
	      return (
	        <tr key={item.data.id}>
	          <td>
	            <p type="button" onClick={_this.vote.bind(_this, 'up')} className="up" >&#8593;</p>
	            <p className="score">{item.data.score}</p>
	            <p type="button" onClick={_this.vote.bind(_this, 'down')} className="down">&#8595;</p>
	          </td>   
	            <td>
	              <div className="posts">
	                <p onClick={_this.viewPost.bind(_this, index, turbaIndex)} className="title">
	                  {item.data.title}
	                </p>
	                <p className="author">
	                  Posted by <b>{item.data.author}</b>
	                </p>
	              </div>
	            </td>   
	        </tr>
	      )
	    })
  	}
    return (
      <div>
        <h1>{this.props.post.data.author}</h1>
      </div>
    )
  }
})