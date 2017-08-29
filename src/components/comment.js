import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectPost, voteOnPost } from '../actions'
import FontAwesome from 'react-fontawesome'
import { displayTime } from '../utils/helpers'
import { Link } from 'react-router-dom'

class Comment extends Component {
    render(){
      return (
        <div> comment </div>
      )
    }
}

export default connect()(Comment)
