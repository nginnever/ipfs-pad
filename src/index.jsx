import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
//import {Router, Route, hashHistory} from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {List, Map} from 'immutable'
import reducer from './reducer'
import {AppContainer} from './components/App'
import {Test} from './components/Test'

const pad = Map({
  hash: 'Qm'
})

const store = createStore(reducer)
store.dispatch({
	type: 'SET_STATE',
	state: {
		pad: pad
	}
})

const routes = <Route>
  <Route path="/" component={AppContainer} />
  <Route path="/test2" component={Test} />
</Route>

ReactDOM.render(
	<Provider store={store}>
  	<Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
)