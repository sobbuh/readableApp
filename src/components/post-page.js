import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PostDoesntExist from './post-doesnt-exist'
import PostDetail from './post-detail'

class PostPage extends Component {

  setActivePost(){
    return this.props.posts.filter(post => post.id === this.props.match.params.id)[0]
  }

  render(){
    const activePost = this.setActivePost()

    return (

      <PostDoesntExist />
    )
  }

}

function mapStateToProps(state){
  return {
    posts: state.posts.posts
  }
}


export default connect(mapStateToProps)(PostPage)
