import * as types from '../actions/actionTypes'

export default function orderByReducer ( state = [], action){
  switch(action.type) {
  case types.CHANGE_ORDER:
    console.log(action)
    return action.option
  default :
    return state
  }
}
