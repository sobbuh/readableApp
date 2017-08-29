import axios from 'axios'
import * as types from '../actions/actionTypes'


// set API endpoint
const api = "http://localhost:5001"
let currPostId = 1


const headers = {
  headers: {
  Authorization: 'auth'
  }
}


// get all posts for a single 'category'
export const getPostsForCategory = (category) => {
  return axios.get(`${api}/${category}/posts`, headers)
  .then(res => res.data)
}

// get all categories, GET ALL CATEGORIES
export const getAllCategories = () => {
  return axios.get(`${api}/categories`, headers)
      .then(res => res.data.categories)
      .then(data => data.map(cat => cat.name));
  }


export const getAllComments = () => {
  return axios.get(`${api}/comments`, headers)
  .then(res => res.data)
}

// get a specific post, by 'id'
export const getPost = (id) => {
  return axios.get(`${api}/${id}`, headers)
  .then(res => res.data)
}

// edit the title and body of a post using the post 'id'
export const editPost = (id, title, body) =>
fetch(`${api}/${id}`, {
method: 'POST',
headers: {
  ...headers,
  'Content-Type': 'application/json'
},
body: JSON.stringify({ title, body })
}).then(res => res.json())


// add a post with all of the necessary information
export function createPost(props, callback) {
    props.timestamp = new Date()
    props.id = currPostId
    currPostId += 1

    const request = axios.post(`${api}/posts`, props, headers)
      .then(() => callback)
    return {
      type: types.CREATE_POST,
      payload: request
    }
  }

// get comment details for a comment with 'id'
export const getComment = (id) =>
fetch(`${api}/comments/${id}`, {headers})
.then(res => res.json())
.then(data => data.post)

export const voteOnPost = (id, option) =>
fetch (`${api}/posts/${id}`, {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({option})
  }).then(res => res.json())

// vote on comment
export const voteOnComment = (id, option) =>
fetch(`${api}/comment/${id}`, {
method: 'POST',
headers: {
  ...headers,
  'Content-Type': 'application/json'
},
body: JSON.stringify({option})
}).then(res => res.json())

// edit the details of a comment
export const editComment = (id, timestamp, body) =>
fetch(`${api}/comments/${id}`, {
  method: 'PUT',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ timestamp, body})
}).then(res => res.json())

// TODO: delete comment
