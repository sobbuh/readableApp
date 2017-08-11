// set API endpoint
const api = "https://localhost:5001"

const headers = {
  'Accept': 'application/json',
  'Authorization': 'token'
}

// get all categories
export const getAllCategories = () =>
  fetch(`${api}/categories`,{ headers })
    .then(res => res.json())
    .then(data => data.categories)
}

// get all posts for a single 'category'
export const getPostsForCategory = (category) =>
  fetch(`${api}/${category}/posts`, {headers})
  .then(res => res.json())
  .then(data => data.posts)

// get all posts, useful for the homepage
export const getAllPosts = () =>
fetch(`${api}/posts`, {headers})
.then(res => res.json())
.then(data => data.posts)

// get a specific post, by 'id'
export const getPost = (id) =>
  fetch(`${api}/${id}`, {headers})
  .then(res => res.json())
  .then(data => data.post)

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
export const addPost = (id, timestamp, title, body, owner, category) =>
  fetch(`${api}/posts`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, timestamp, title, body, owner, category })
  }).then(res => res.json())

// TODO: implement delete a post


//get all comments for a single post
export const getCommentsForPost = (id) =>
  fetch(`${api}/posts/${id}/comments`, {headers})
  .then(res => res.json())
  .then(data => data.post)

// add a comment
export const addComment = (id, timestamp, body, owner, parentId) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, timestamp, body, owner, parentId })
  }).then(res => res.json())


// get comment details for a comment with 'id'
export const getCommentDetails = (id) =>
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
export const editComment = (timestamp, body) =>
fetch(`${api}/comments/${id}`, {
  method: 'PUT',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ timestamp, body})
}).then(res => res.json())

// TODO: delete comment
