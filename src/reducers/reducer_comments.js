import * as types from '../actions/actionTypes'

export default function commentsReducer ( state = [], action){
  switch(action.type) {
  case types.LOAD_COMMENTS:
    return {...state, comments: action.payload}
  default :
    return state
  }
}
