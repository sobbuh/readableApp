import * as types from '../actions/actionTypes'
import _ from 'lodash'

export default function commentsReducer ( state = [], action){
  switch(action.type) {
  case types.CREATE_COMMENT :
    const { data } = action.payload
    console.log(data)
    console.log(action)
    return {
    ...state, [data.parentId]: {...state, data}
    }
  case types.DELETE_COMMENT :
    return {
    ...state, [action.meta] : action.payload.data
    }
  case types.FETCH_COMMENTS:
    console.log(action.meta)
    return  {...state, [action.meta]: action.payload.data}
  case types.LOAD_COMMENTS:
    return {...state, comments: action.payload.data}
  case types.VOTE_ON_COMMENT:
    console.log(action)
    return {...state, [action.payload.data.id]: action.payload.data}
  default :
    return state
  }
}
