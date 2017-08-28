import { connect } from 'react-redux'
import _ from 'lodash'
import { bindActionCreators } from 'redux'
import { getAllPosts } from '../utils/api.js'
import * as types from '../actions/actionTypes.js'


export default function postsReducer (state = {}, action) {
  switch (action.type) {
    case types.CREATE_POST :
      return {
        ...state,posts: action.payload
      }
    case types.DELETE_POST :
      const { delete_id } = action
      return {
        ...state.posts.filter(post => post.id !== delete_id)
      }
    case types.EDIT_POST :
      const { edit_id, edit_title, edit_body } = action
      const editedPost = state.posts.posts.filter(post => post.id === edit_id)
      editedPost.title = edit_title
      editedPost.body = edit_body
      return {
        ...state.posts.filter(post => post.id !== edit_id).conc(editedPost)
      }
    case types.LOAD_POSTS:
      return {...state, posts: action.payload}
    case types.FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id")
    case types.FETCH_POST:
      return {...state, [action.payload.data.id]: action.payload.data}
    default :
      return state
  }
}
