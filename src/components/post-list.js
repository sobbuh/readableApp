import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index.js'
import { Link } from 'react-router-dom'
import PostListItem from './post-list-item'
import DropdownPostSorter from './dropdown-post-sorter'
import _ from 'lodash'

class PostList extends Component {

  renderList() {
    const orderedPosts = _.orderBy(this.props.posts, this.props.orderBy, 'desc')
    console.log(orderedPosts)
    console.log(this.props)
    return (
      _.map(orderedPosts, post =>
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
    orderBy : state.orderBy
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostList)
