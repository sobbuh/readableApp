import * as types from '../actions/actionTypes'


export default function categoriesReducer(state = [], action){
  switch (action.type) {
  case types.LOAD_CATEGORIES:
    return {...state, categories: action.payload}
  default:
  return state

  }
}
