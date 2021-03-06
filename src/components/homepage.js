import React, { Component } from 'react'
import PostList from './post-list'
import Categories from '../components/categories'
import AddPostForm from '../components/add-post-form'
import { connect } from 'react-redux'
import { fetchPosts, fetchCategories, fetchComments } from '../actions'
import {DropdownPostSorter } from './dropdown-post-sorter'
import _map from 'lodash.map'
import _ from 'lodash'

class HomePage extends Component{

  componentDidMount(){
    console.log(this.props)
  }

  render(){
    return (
      <div>
        <Categories />
        <PostList posts={this.props.posts} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    posts : _.filter(state.posts,['deleted', false]),
    categories : state.categories,
    comments: state.comments
  }
}

export default connect(mapStateToProps, { fetchPosts, fetchCategories, fetchComments })(HomePage)
