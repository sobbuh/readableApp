import { combineReducers } from 'redux'
import PostsReducer from './reducer_posts'
import CommentsReducer from './reducer_comments'
import CategoriesReducer from './reducer_categories'

import {
  ADD_COMMENT,
  ADD_POST,
  DELETE_COMMENT,
  DELETE_POST,
  EDIT_COMMENT,
  EDIT_POST,
  GET_ALL_POSTS,
  GET_ALL_CATEGORIES,
  GET_COMMENT,
  GET_POST,
  GET_POSTS_FOR_CATEGORY,
  SELECT_CATEGORY,
  VOTE_ON_COMMENT,
  VOTE_ON_POST
} from '../actions'

const initialState = {
  categories: null,
  posts: null,
  comments: null
}

const rootReducer = combineReducers({
    posts: postsReducer,
    categories: categoriesReducer,
    comments: commentsReducer,
})

export default rootReducer
