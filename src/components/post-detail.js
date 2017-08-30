import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { displayTime } from '../utils/helpers'
import { fetchPost, fetchComments } from '../actions'
import { Link } from 'react-router-dom'
import Comments from  './comments'
import AddCommentForm from './add-comment'

class PostDetail extends Component {

  render() {
    console.log(this.props)
    if (!this.props.post) {
      return (
        <div>Loading...</div>
      )
    }

    else {

    const {id, title, owner, score, timestamp, category, selectPost, body} = this.props.post
    const postTime = displayTime(timestamp);
    const author = `posted by ${owner}`

    return (

    <div>
      <div className="column is-offset-2 box is-two-thirds">
        <article className="media">
          <div className="media-left">
            <img src="./sprites/arrow-up.jpg" width="12px" />
            <p>{score}</p>
            <img src="./sprites/arrow-down.jpg" width="12px" />
          </div>
      <div className="media-content">
        <div className="content">
          <Link to={`/${category}/${id}`}><p className="post-title">{title}</p></Link>
          <span className="post-owner"><strong><small>{author}</small>
          <small>{postTime}</small></strong></span>
          <p>{body}</p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item">
              <span className="small"><Link to={`/${category}/${id}/edit`}>edit</Link></span>
              <span className="spacer"></span>
              <span className="small">delete</span>
            </a>
          </div>
        </nav>
      </div>
    </article>
    </div>
      <Comments comments={this.props.comments}/>
      <AddCommentForm parentId={id}/>
    </div>

  )}
}
}

function mapStateToProps(state, ownProps){
  return {post : state.posts[ownProps.match.params.id],
  comments: state.comments[ownProps.match.params.id]}
}


export default connect(mapStateToProps, {fetchPost})(PostDetail)
