import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getPostsForCategory } from '../utils/api'
import PostList from './post-list'

class CategoryPage extends Component {
  componentDidMount(){
    const category = this.props.match.params.category

  }

  render() {
    return (
    <div>
      <PostList />
    </div>
    )

}
}
function mapStateToProps(state, ownProps){
  return {
    posts : state.posts
  }
}

export default connect(mapStateToProps, { getPostsForCategory})(CategoryPage)
