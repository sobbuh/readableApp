import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index.js'
import { Link } from 'react-router-dom'
import PostListItem from './post-list-item'
import DropdownPostSorter from './dropdown-post-sorter'
import _map from 'lodash.map'
import _orderBy from 'lodash.orderby'

class PostList extends Component {

  renderList() {
    const orderedPosts = _orderBy(this.props.posts, this.props.orderBy, 'desc')
    return (
      _map(orderedPosts, post =>
      <PostListItem
        key={post.id}
        id={post.id}
        title={post.title}
        owner={post.author}
        score={post.voteScore}
        category={post.category}
        timestamp={post.timestamp}
        numComments={(this.props.comments[post.id] || []).length}/>
    )
    )
  }


  render() {
    return (

      <div className="is-two-thirds column is-offset-2">
        <DropdownPostSorter onChange={this.onChangeSort}/>
        {this.renderList()}
      </div>
    )
  }



}

function mapStateToProps(state){
  return {
    posts : state.posts,
    orderBy : state.orderBy,
    comments : state.comments
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostList)
