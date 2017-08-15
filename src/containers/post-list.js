import React, { Component } from 'react'
import PostListItem from '../components/post-list-item.js'
import { connect } from 'react-redux'


class PostList extends Component {

  componentDidMount(){

  }

  renderList() {

    return (
      this.props.posts.map(post =>
      <PostListItem
        key={post.id}
        title={post.title}
        body={post.body}
        owner={post.author}
        score={post.voteScore}
        timestamp={post.timestamp} />
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
    posts : state.posts.posts
  }
}




export default connect(mapStateToProps)(PostList)
