import * as types from '../actions/actionTypes'


export default function categoriesReducer(state = [], action){
  switch (action.type) {
  case types.FETCH_CATEGORIES:
    return action.payload.data.categories
  default:
    return state

  }
}
