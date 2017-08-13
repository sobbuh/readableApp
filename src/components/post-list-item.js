import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectPost }from '../actions/index'
import { bindActionCreators } from 'redux'

const PostListItem = (props) => {

  const {id, title, owner, score, timestamp} = "abc"

  return (
  <div>
    <div className="column is-offset-2 box is-two-thirds">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image" />
          </figure>
        </div>
    <div className="media-content">
      <div className="content">
        <p onClick={() => this.props.selectPost(id)}>{title}</p>
        <br/>
        <strong><small>{owner}</small> <small>{timestamp}</small></strong>
      </div>
      <nav className="level is-mobile">
        <div className="level-left">
          <a className="level-item">
            <span className="icon is-small"><i className="fa fa-reply"></i></span>
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

export default connect(mapDispatchToProps)(PostListItem)
