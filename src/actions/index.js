import axios from 'axios'

export const ADD_COMMENT = 'ADD_COMMENT'
export const ADD_POST = 'ADD_POST'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_POSTS_FOR_CATEGORY = 'GET_POSTS_FOR_CATEGORY'
export const SELECT_COMMENT = 'SELECT_COMMENT'
export const SELECT_POST = 'SELECT_POST'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const VOTE_ON_POST = 'VOTE_ON_POST'
export const VOTE_ON_COMMENT = 'VOTE_ON_COMMENT'

const api = "https://localhost:5001"

const headers = {
  'Accept': 'application/json',
  'Authorization': 'token'
}
// 1
export function addComment ({ id, timestamp, body, owner, parentId }) {
  return {
    type: ADD_COMMENT,
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
    type: ADD_POST,
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
    type: DELETE_COMMENT,
    id
  }
}

export function deletePost({id}){
  return {
    type: DELETE_POST,
    id
  }
}

export function editComment ({id, body}) {
  return {
    type: EDIT_COMMENT,
    id,
    body
  }
}

export function editPost ({id, body, title}) {
  return {
    type: EDIT_POST,
    id,
    body,
    title
  }
}

export function getAllCategories() {
  return {
    type: GET_ALL_CATEGORIES
  }
}

export function getAllComments() {
  return {
    type: GET_ALL_COMMENTS
  }
}

export const getAllPosts = () => {
const url = `${api}/posts`
const request = axios.get(url, headers)
return {
  type: GET_ALL_POSTS,
  payload: request
  }
}

export function selectPost({id}) {
  return {
    type: SELECT_POST,
    id
  }
}

export function selectComment({id}) {
  return {
    type: SELECT_COMMENT,
    id
  }
}

export function selectCategory({name}) {
  return {
    type: SELECT_CATEGORY,
    name
  }
}

export function voteOnComment({id,option}) {
  return {
    type: VOTE_ON_COMMENT,
    id,
    option
  }
}

export function voteOnPost({id,option}) {
  return {
    type: VOTE_ON_POST,
    id,
    option
  }
}
