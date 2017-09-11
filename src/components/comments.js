import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../actions/index.js'
import { Link } from 'react-router-dom'
import _map from 'lodash.map'
import Comment from './comment'


class Comments extends Component {

  renderComments(){
      console.log(this.props.comments)
      return (
      _map(this.props.comments, comment=>
      <Comment
        key={comment.id}
        comment={comment}
        score={comment.voteScore}
       />
    )
    )
  }

  render() {
    console.log(this.props.comments)
    return (
      <div className="is-two-thirds column is-offset-2">
          {this.renderComments()}
      </div>
    )
  }
}


export default connect(null, { fetchComments })(Comments)
