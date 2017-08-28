import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getPostsForCategory } from '../utils/api'

class CategoryPage extends Component {
  componentDidMount(){
    const category = this.props.match.params.category

  }

  render() {
    console.log(this.props.posts)
    return ('')}
}

function mapStateToProps(state, ownProps){
  return {
    posts : state.posts
  }
}


export default connect(mapStateToProps, { getPostsForCategory})(CategoryPage)
