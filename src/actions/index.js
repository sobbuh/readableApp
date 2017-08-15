import * as types from './actionTypes.js'
import * as api from '../utils/api.js'

// 1
export function addComment ({ id, timestamp, body, owner, parentId }) {
  return {
    type: types.ADD_COMMENT,
    id,
    timestamp,
    body,
    owner,
    parentId
  }
}

// 2
export function addPost ({ id, timestamp, body, title, owner, category }) {
  return {
    type: types.ADD_POST,
    id,
    timestamp,
    title,
    body,
    owner,
    category
  }
}

export function deleteComment({id}){
  return {
    type: types.DELETE_COMMENT,
    id
  }
}

export function deletePost({id}){
  return {
    type: types.DELETE_POST,
    id
  }
}

export function editComment ({id, body}) {
  return {
    type: types.EDIT_COMMENT,
    id,
    body
  }
}

export function editPost ({id, body, title}) {
  return {
    type: types.EDIT_POST,
    id,
    body,
    title
  }
}

export const loadCategories = (categories) => ({type: types.LOAD_CATEGORIES, payload: categories})

export const fetchCategories = () => {
  return (dispatch) => {
    api.getAllCategories()
    .then(categories => dispatch(loadCategories(categories)))
  }
}

export const loadPosts = (posts) => ({type: types.LOAD_POSTS, payload: posts})

export const fetchPosts = () => {
  return (dispatch) => {
    api.getAllPosts()
    .then(posts => dispatch(loadPosts(posts)))
  }
}

export function getAllComments() {
  return {
    type: types.GET_ALL_COMMENTS
  }
}


export function selectPost({id}) {
  return {
    type: types.SELECT_POST,
    id
  }
}

export function selectComment({id}) {
  return {
    type: types.SELECT_COMMENT,
    id
  }
}

export function selectCategory({name}) {
  return {
    type: types.SELECT_CATEGORY,
    name
  }
}

export function voteOnComment({id,option}) {
  return {
    type: types.VOTE_ON_COMMENT,
    id,
    option
  }
}

export function voteOnPost({id,option}) {
  return {
    type: types.VOTE_ON_POST,
    id,
    option
  }
}
