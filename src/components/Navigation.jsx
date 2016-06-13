import React from 'react'
import ReactDOM from 'react-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import NavigationItem from './NavigationItem'

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    var items = this.props.items
      .sort(function(a, b) {
        // Sort by # of subscribers in descending order
        return b.data.subscribers - a.data.subscribers;
      })
      .map(function(item, index) {
        return (
          <NavigationItem
            index={index}
            item={item}
            itemSelected={this.props.itemSelected}
            key={item.data.id}
            selected={item.data.url === this.props.activeUrl} />
        )
      }, this)

    return (
      <div className="navigation">
        <div className="header">Turbas</div>
        <ul>
            {items}
        </ul>
      </div>
    )
  }
})