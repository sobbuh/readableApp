import React, { Component } from 'react'
import PostList from './post-list'
import Categories from '../components/categories'
import AddPostForm from '../components/add-post-form'
import { connect } from 'react-redux'
import { fetchPosts, fetchCategories } from '../actions'
import _ from 'lodash'

class HomePage extends Component{

  componentDidMount(){
    this.props.posts || this.props.fetchPosts()
    this.props.categories || this.props.fetchCategories()

  }


  render(){

    return (
      <div>
        <Categories />
        <PostList />

      </div>
    )
  }
}


export default connect(null, { fetchPosts, fetchCategories })(HomePage)
