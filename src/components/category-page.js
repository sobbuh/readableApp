import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getPostsForCategory } from '../utils/api'
import PostList from './post-list'
import _ from 'lodash'

class CategoryPage extends Component {
  render() {
    return (
    <div>
      <PostList posts={this.props.posts} />
    </div>
    )
  }
}

function mapStateToProps(state, ownProps){

  return {
    posts : _.filter(state.posts, {'category' : ownProps.match.params.category, 'deleted' : false})
  }
}

export default connect(mapStateToProps, { getPostsForCategory})(CategoryPage)
