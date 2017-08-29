import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectPost, voteOnPost } from '../actions'
import FontAwesome from 'react-fontawesome'
import { displayTime } from '../utils/helpers'
import { Link } from 'react-router-dom'

class PostListItem extends Component {


  render() {
  const {id, title, owner, score, timestamp, category, selectPost, voteOnPost, numComments } = this.props
  const postTime = displayTime(timestamp);
  const author = `posted by ${owner}`

  return (
  <div>
    <div className="column box">
      <article className="media">
        <div className="media-left">
          <img src="./sprites/arrow-up.jpg" width="12px" onClick={() => {voteOnPost(id,'upVote')}
          }/>
          <p>{score}</p>
          <img src="./sprites/arrow-down.jpg" width="12px" onClick={() => {voteOnPost(id,'downVote')}}/>
        </div>
    <div className="media-content">
      <div className="content">
        <Link to={`/${category}/${id}`}><p className="post-title" onClick={() => selectPost(id)}>{title}</p></Link>
        <span className="post-owner"><strong><small>{author}</small>
        <small>{postTime}</small></strong></span>
      </div>
      <nav className="level is-mobile">
        <div className="level-left">
          <p className="level-item">
            <span className="small">{`Comments(${numComments})`}</span>
            <span className="small"><Link to={`/${category}/${id}/edit`}>edit</Link></span>
            <span className="spacer"></span>
            <span className="small">delete</span>
          </p>
        </div>
      </nav>
    </div>
  </article>
  </div>
  </div>

  )

  }
}

export default connect(null,{ selectPost, voteOnPost})(PostListItem)
