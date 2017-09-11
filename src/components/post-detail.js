import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { displayTime } from '../utils/helpers'
import { fetchPost, fetchComments } from '../actions'
import { Link } from 'react-router-dom'
import Comments from  './comments'
import AddCommentForm from './add-comment'
import _ from 'lodash'

class PostDetail extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchPost(id)
    this.props.fetchComments(id)

  }

  render() {

    console.log(this.props.comments)
    const { post } = this.props

    if (!post) {
      return <div>loading...</div>
    }

    const postTime = displayTime(post.timestamp);

    return (

    <div>
      <div className="column is-offset-2 box is-two-thirds">
        <article className="media">
          <div className="media-left">
            <img src="./sprites/arrow-up.jpg" width="12px" />
            <p>{post.score}</p>
            <img src="./sprites/arrow-down.jpg" width="12px" />
          </div>
      <div className="media-content">
        <div className="content">
          <Link to={`/${post.category}/${post.id}`}><p className="post-title">{post.title}</p></Link>
          <span className="post-owner"><strong><small>{`posted by ${post.author}`}</small>
          <small>{post.postTime}</small></strong></span>
          <p>{post.body}</p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item">
              <span className="small"><Link to={`/${post.category}/${post.id}/edit`}>edit</Link></span>
              <span className="spacer"></span>
              <span className="small">delete</span>
            </a>
          </div>
        </nav>
      </div>
    </article>
    </div>
      <Comments comments={this.props.comments}/>
      <AddCommentForm parentId={post.id}/>
    </div>

  )}
}

function mapStateToProps(state, ownProps){
  return {
  post : state.posts[ownProps.match.params.id],
  comments: state.comments[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {fetchPost, fetchComments})(PostDetail)
