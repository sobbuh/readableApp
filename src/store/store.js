import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import initialState from './initialState'
import promise from 'redux-promise'

export default createStore(rootReducer,
                          initialState,
                          applyMiddleware(promise))
