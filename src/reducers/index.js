import { combineReducers } from 'redux'
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

function posts (state = {}, action) {
  switch (action.type) {
    case ADD_POST :
      const { id, timestamp, title, body, owner, category } = action
      return {
        ...state
      }
    case DELETE_POST :
      const { delete_id } = action
      return {
        ...state.filter(post => post.id !== delete_id)
      }
    case EDIT_POST :
      const { edit_id, edit_title, edit_body } = action
      const editedPost = state.filter(post => post.id === edit_id)
      editedPost.title = edit_title
      editedPost.body = edit_body
      return {
        ...state.filter(post => post.id !== id).conc(editedPost)
      }

    default :
      return state
  }
}


function categories ( state = {}, action) {
  return state
}

function comments ( state = {}, action){
  return state
}

export default combineReducers({
  posts,
  categories,
  comments
})
