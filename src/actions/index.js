export const ADD_COMMENT = 'ADD_COMMENT'
export const ADD_POST = 'ADD_POST'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_POSTS_FOR_CATEGORY = 'GET_POSTS_FOR_CATEGORY'
export const GET_COMMENT = 'GET_COMMENT'
export const GET_POST = 'GET_POST'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const VOTE_ON_POST = 'VOTE_ON_POST'
export const VOTE_ON_COMMENT = 'VOTE_ON_COMMENT'

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

export function editComment ({id, body}) {
  return new Promise(function(resolve, reject) {
    type: EDIT_COMMENT,
    id,
    body
  });
}

export function editPost ({id, body, title}) {
  return {
    type: EDIT_POST,
    id,
    body,
    title
  }
}
