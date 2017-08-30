import * as types from './actionTypes.js'
import * as api from '../utils/api.js'
import axios from 'axios'

const ROOT_URL = "http://localhost:5001"
const headers = {
  headers: {
  Authorization: 'auth'
  }
}

let currCommentId = 1

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
  const request = axios.get(`${ROOT_URL}/categories`, headers)

  return {
    type: types.FETCH_CATEGORIES,
    payload: request
  }

}

// WORKING
export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts`, headers)

  return {
    type: types.FETCH_POSTS,
    payload: request
  }
}

export const voteOnPost = (id,option) => {
  const request = axios.post(`${ROOT_URL}/posts/${id}`, {option: `${option}`}, headers)
  return {
    type: types.VOTE_ON_POST,
    payload: request
  }
}

export const voteOnComment = (id,option) => {
  const request = axios.post(`${ROOT_URL}/comments/${id}`, {option: `${option}`}, headers)
  return {
    type: types.VOTE_ON_COMMENT,
    payload: request
  }
}

export const fetchPost = (id) => {

  const request = axios.get(`${ROOT_URL}/posts/${id}`, headers)

  return {
    type: types.FETCH_POST,
    payload: request
  }
}

// WORKING
export const loadPost = (post) => ({type: types.LOAD_POST, payload: post})

// WORKING
export const selectPost = (id) => {
  return (dispatch) => {
    api.getPost(id)
    .then(post => dispatch(loadPost(post)))
  }
}

export const createComment = (props, callback) => {
    props.timestamp = new Date()
    props.id = currCommentId
    currCommentId += 1

    const request = axios.post(`${ROOT_URL}/comments`, props, headers)
      .then(() => callback)
    return {
      type: types.CREATE_COMMENT,
      payload: request
    }
}

export const fetchComments = (id) => {
  const request = axios.get(`${ROOT_URL}/posts/${id}/comments`, headers)

    return {
      type: types.FETCH_COMMENTS,
      payload: request,
      meta: id
    }
}

export const loadComments = (comments) => ({type: types.LOAD_COMMENTS, payload: comments})

export function selectComment({id}) {
  return {
    type: types.SELECT_COMMENT,
    id
  }
}

export function changeOrder(option) {

  return {
    type: types.CHANGE_ORDER,
    option
  }
}
