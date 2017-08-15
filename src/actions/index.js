import axios from 'axios'
import * as types from './actionTypes.js'

const api = "https://localhost:5001"

const headers = {
  'Accept': 'application/json',
  'Authorization': 'token'
}
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

export function getAllCategories() {
  return {
    type: types.GET_ALL_CATEGORIES
  }
}

export function getAllComments() {
  return {
    type: types.GET_ALL_COMMENTS
  }
}

export const getAllPosts = () => {
const url = `${api}/posts`
const request = axios.get(url, headers)
return {
  type: types.GET_ALL_POSTS,
  payload: request
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
