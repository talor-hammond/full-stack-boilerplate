import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import reducers from './reducers/index'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import App from './components/App'

const store = createStore(reducers, compose(
    applyMiddleware(thunk)
))

document.addEventListener('DOMContentLoaded', () => {
    render(
        <Provider store={store}>
        <App />
        </Provider>,
        document.getElementById('app')  
)
})