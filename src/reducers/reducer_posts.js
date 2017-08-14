import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllPosts } from '../actions'
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


export default function postsReducer (state = [], action) {
  switch (action.type) {
    case ADD_POST :
      const { id, timestamp, title, body, owner, category } = action
      return {
        ...state.posts
      }
    case DELETE_POST :
      const { delete_id } = action
      return {
        ...state.posts.filter(post => post.id !== delete_id)
      }
    case EDIT_POST :
      const { edit_id, edit_title, edit_body } = action
      const editedPost = state.filter(post => post.id === edit_id)
      editedPost.title = edit_title
      editedPost.body = edit_body
      return {
        ...state.posts.filter(post => post.id !== id).conc(editedPost)
      }
    case GET_ALL_POSTS :
      return [action.payload]
    default :
      return state
  }
}
