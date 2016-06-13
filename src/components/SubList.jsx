import React from 'react'
import ReactDOM from 'react-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import AddSubListItem from './AddSubListItem'

export default React.createClass({
  mixins: [PureRenderMixin],
  vote: function(vote) {
    if (vote === 'up') {
      alert('UP VOTE!!!')
    }
    if (vote === 'down') {
      alert('DOWN VOTE!!!')
    }
  },
  viewPost: function(index, turbaIndex) {
    const content = {
      route: 'SubPost',
      index: index,
      turbaIndex: turbaIndex
    }
    this.props.setSelectedBody(content)
  },
  render: function() {
    var turbaIndex = this.props.turbaIndex
    var _this = this
    var subNodes = this.props.items.map((item, index) => {
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
    return (
      <div>
      <table>
        <tbody>
          {subNodes}
        </tbody>
      </table>
      <AddSubListItem />
      </div>
    )
  }
})