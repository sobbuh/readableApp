import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index.js'
import { Link } from 'react-router-dom'
import PostListItem from './post-list-item'
import _ from 'lodash'

class PostList extends Component {

  renderList() {
    return (
      _.map(this.props.posts, post =>
      <PostListItem
        key={post.id}
        id={post.id}
        title={post.title}
        owner={post.author}
        score={post.voteScore}
        category={post.category}
        timestamp={post.timestamp} />
    )
    )
  }

  render() {
    return (
      <div>{this.renderList()}</div>
    )
  }



}

function mapStateToProps(state){
  return {
    posts : state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostList)
