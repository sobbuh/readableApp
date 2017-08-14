import React, { Component } from 'react'
import PostListItem from '../components/post-list-item.js'
import { connect } from 'react-redux'


class PostList extends Component {

  renderList() {

    return (
      this.props.posts.map(post =>
      <PostListItem title={post.title} body={post.body} owner={post.owner} score={post.score} timestamp={post.timestamp} />
    )
  )
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    posts : state.posts
  }
}




export default connect(mapStateToProps)(PostList)
