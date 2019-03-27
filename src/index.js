import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './index.scss'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from '../src/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'


const store = createStore(reducers,  composeWithDevTools(applyMiddleware(thunkMiddleware)))
console.log(store.getState())
console.log(store.subscribe(reducers))



ReactDOM.render(
        <Provider store={store}>
                <App />
        </Provider>
, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
