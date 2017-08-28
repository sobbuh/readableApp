import * as types from './actionTypes.js'
import * as api from '../utils/api.js'
import axios from 'axios'

const ROOT_URL = "http://localhost:5001"
const headers = {
  headers: {
  Authorization: 'auth'
  }
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

/*
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

export const savePost = (title) => {
  return (dispatch) => {
    api.addPost(title)
    .then(res => dispatch(addPost(title)))
  }
}

*/

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
export const loadPosts = (posts) => ({type: types.LOAD_POSTS, payload: posts})

// WORKING
export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts`, headers)
  return {
    type: types.FETCH_POSTS,
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

//WORKING
export const fetchPostsForCategory = (category) => {
  return (dispatch) => {
    api.getPostsForCategory(category)
    .then(posts => dispatch(loadPosts(posts)))
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


export function fetchComments() {
  return (dispatch) => {
    api.getAllComments()
    .then(comments => dispatch(loadComments(comments)))
  }
}

export const loadComments = (comments) => ({type: types.LOAD_COMMENTS, payload: comments})

export function selectComment({id}) {
  return {
    type: types.SELECT_COMMENT,
    id
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
