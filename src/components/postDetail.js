import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { bindActionCreators } from 'redux'
import { displayTime } from '../utils/helpers'

class PostDetail extends Component {

  componentDidMount(){

    const activePost = this.props.posts.filter(post => post.id === this.props.match.params.id)[0]
    console.log(activePost)
  }

  render() {


    let {id, title, owner, score, body, timestamp, category, selectPost } = this.activePost
    console.log(this.activePost)
    const postTime = displayTime(this.activePost.timestamp);
    const author = `posted by ${this.activePost.owner}`
    console.log(id, title, owner, score, body)


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
          <p className="post-title">{title}</p>
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
        <p> {body} </p>
      </div>
    </article>
    </div>
    </div>

  )
}
}

function mapStateToProps(state){
  return {
    posts : state.posts.posts
  }
}

function mapDispatchToProps(dispatch){
  //whenever selectPost is called, result should be passed to reducers
  return bindActionCreators({
    selectPost: actions.selectPost,
    editPost: actions.editPost,
    deletePost: actions.deletePost,
    voteOnPost: actions.voteOnPost,
    editComment: actions.editComment,
    deleteComment: actions.deleteComment,
    voteOnComment: actions.voteOnComment,
    addComment: actions.addComment
    }, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(PostDetail)
