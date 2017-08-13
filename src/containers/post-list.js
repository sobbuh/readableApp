import React, { component } from 'react'
import Post from '../components/post.js'
import { connect } from 'react-redux'
import { selectPost }from '../actions/index'
import { bindActionCreators } from 'redux'

class PostList extends Component {

  renderList() {
    return this.props.posts.map(post =>
      return <Post title={post.title} body={post.body} owner={post.owner} score={post.score} timestamp={post.timestamp} />
    )
  }

  render (){
    return {
      {this.renderList()}
    }
  }
}

function mapStateToProps(state){
  return {
    posts : state.posts
  }
}

export default connect(mapStateToProps)(BookList)
