import React, { Component } from 'react'
import PostList from '../containers/post-list'
import Categories from '../components/categories'
import AddPostForm from '../components/add-post-form'

class Posts extends Component{
  render(){
    return (
      <div>
        <Categories />
        <PostList />
        
      </div>
    )
  }
}

export default Posts
