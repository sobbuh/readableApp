import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeEnhancers()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
registerServiceWorker()
