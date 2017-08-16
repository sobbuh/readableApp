import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectPost }from '../actions/index'
import { bindActionCreators } from 'redux'
import FontAwesome from 'react-fontawesome'
import ReduxThunk from 'redux-thunk'
import { displayTime } from '../utils/helpers'

const PostListItem = (props) => {

  console.log(props)
  const {id, title, owner, score, timestamp, selectPost} = props
  const postTime = displayTime(timestamp);
  const author = `posted by ${owner}`

  return (
  <div>
    <div className="column is-offset-2 box is-two-thirds">
      <article className="media">
        <div className="media-left">
          <p>^</p>
          <p>{score}</p>
          <p>^</p>
        </div>
    <div className="media-content">
      <div className="content">
        <p className="post-title" onClick={() => selectPost(id)}>{title}</p>
        <span className="post-owner"><strong><small>{author}</small>
        <small>{postTime}</small></strong></span>
      </div>
      <nav className="level is-mobile">
        <div className="level-left">
          <a className="level-item">
            <span className="small">edit</span>
            <span className="spacer"></span>
            <span className="small">delete</span>
          </a>
        </div>
      </nav>
    </div>
  </article>
  </div>
  </div>

  )
}

function mapDispatchToProps(dispatch){
  //whenever selectPost is called, result should be passed to reducers
  return bindActionCreators({selectPost: selectPost}, dispatch)
}

export default connect(null,mapDispatchToProps)(PostListItem)
