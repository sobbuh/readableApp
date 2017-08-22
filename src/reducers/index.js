import { combineReducers } from 'redux'
import postsReducer from './reducer_posts'
import commentsReducer from './reducer_comments'
import categoriesReducer from './reducer_categories'
import { reducer as FormReducer } from 'redux-form'

import * as types from '../actions'

const initialState = {
  categories: null,
  posts: null,
  comments: null
}

const rootReducer = combineReducers({
    posts: postsReducer,
    categories: categoriesReducer,
    comments: commentsReducer,
    form: FormReducer,
})

export default rootReducer
