import React, { Component } from 'react';
import { connect } from 'react-redux'
import { voteOnComment } from '../actions'
import FontAwesome from 'react-fontawesome'
import { displayTime } from '../utils/helpers'
import { Link } from 'react-router-dom'

class Comment extends Component {
    render(){
      const {id, body, author, score } = this.props.comment
      return (
        <div>
          <div className="column box">
            <article className="media">
              <div className="media-left">
                <img src="./sprites/arrow-up.jpg" width="12px" onClick={() => {voteOnComment(id,'upVote')}
                }/>
                <p>{score}</p>
                <img src="./sprites/arrow-down.jpg" width="12px" onClick={() => {voteOnComment(id,'downVote')}}/>
              </div>
          <div className="media-content">
            <div className="content">
              <p>{body}</p>
              <span className="post-owner"><strong><small>{author}</small></strong></span>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <p className="level-item">
                  <span className="small"><Link to={'/'}>edit</Link></span>
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

export default connect()(Comment)
