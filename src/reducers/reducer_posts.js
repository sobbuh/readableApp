import _ from 'lodash'
import * as types from '../actions/actionTypes.js'


export default function postsReducer (state = {}, action) {
  switch (action.type) {
    case types.CREATE_POST :
      console.log(action)
      return {
        ...state, [action.meta]: action.payload
      }
    case types.DELETE_POST :
      console.log(action)
      return {
        ...state, [action.meta] : action.payload.data
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
      return {...state, [action.payload.data.id]: action.payload.data}
    case types.FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id")
    case types.FETCH_POST:
      return {...state, [action.payload.data.id]: action.payload.data}
    case types.VOTE_ON_POST:
        return {...state, [action.payload.data.id]: action.payload.data}
    default :
      return state
  }
}
