import React, { Component } from 'react'
import PostList from '../containers/post-list'
import AddPostForm from '../components/add-post-form'

class Posts extends Component{
  render(){
    return (
      <div>
        <PostList />
        <AddPostForm />
      </div>
    )
  }
}

export default Posts
