import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllPosts } from '../utils/api.js'
import * as types from '../actions/actionTypes.js'


export default function postsReducer (state = [], action) {
  switch (action.type) {
    case types.ADD_POST :
      const { id, timestamp, title, body, owner, category } = action
      return {
        ...state.posts
      }
    case types.DELETE_POST :
      const { delete_id } = action
      return {
        ...state.posts.filter(post => post.id !== delete_id)
      }
    case types.EDIT_POST :
      const { edit_id, edit_title, edit_body } = action
      const editedPost = state.filter(post => post.id === edit_id)
      editedPost.title = edit_title
      editedPost.body = edit_body
      return {
        ...state.posts.filter(post => post.id !== id).conc(editedPost)
      }
    case types.GET_ALL_POSTS :
      return [action.payload]
    default :
      return state

}
