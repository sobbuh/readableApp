import * as types from '../actions/actionTypes'
import _ from 'lodash'

export default function commentsReducer ( state = [], action){
  switch(action.type) {
  case types.CREATE_COMMENT :
    return {
    ...state, comments: action.payload
    }
  case types.FETCH_COMMENTS:
    console.log(action)
    return _.mapKeys(action.payload.data, "id")
  case types.LOAD_COMMENTS:
    return {...state, comments: action.payload}
  default :
    return state
  }
}
