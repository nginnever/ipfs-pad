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
      activeNavigationUrl: ""
    })
  },
  render: function() {
    return (
      <div>
        <h1>test</h1>
      </div>
    )
  }
})

function mapStateToProps(state) {
  console.log(state.toJSON())
  return state.toJSON()
}

export const AppContainer = connect(mapStateToProps)(App)
