import React from 'react'
import ReactDOM from 'react-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import Navigation from './Navigation'
import Body from './Body'

let post

export const App = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState: function() {
    return ({
      activeNavigationUrl: "",
      navigationItems: this.props.navigationItems,
      subItems: [],
      title: "turba alpha",
      content: {
        route: "home"
      }
    })
  },
  setSelectedItem: function(item, index) {
    var _this = this
    
    _this.setState({
      subItems: item.data.subItems,
      activeNavigationUrl: item.data.url,
      title: item.data.display_name,
      content: {
        route: "subView",
        turbaIndex: index
      }
    })
  },
  setSelectedBody: function(content) {
    post = this.props.navigationItems[content.turbaIndex].data.subItems[content.index]
    var _this = this
    _this.setState({
      content: {
        route: "SubPost",
        subListPost: post
      }
    })
  },
  render: function() {
    return (
      <div>
        <div className="logo">
          <img src={'logo.svg'} style={{height: 50}} />
        </div>
        <div className="turba">
        <h1>{this.state.title}</h1>
        </div>
        <Navigation
          activeUrl={this.state.activeNavigationUrl}
          items={this.state.navigationItems}
          itemSelected={this.setSelectedItem} />
        <Body
          content={this.state.content}
          items={this.state.subItems}
          setSelectedBody={this.setSelectedBody}
          subItemPost={this.state.subItemPost} />
      </div>
    )
  }
})

function mapStateToProps(state) {
  return state.toJSON()
}

export const AppContainer = connect(mapStateToProps)(App)
