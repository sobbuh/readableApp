import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { fetchCategories, fetchPosts, fetchComments } from '../actions/index.js'
import { Link, withRouter } from 'react-router-dom'
import Routes from './routes'
import Header from './header'
import _map from 'lodash.map'

class App extends Component {
  componentDidMount() {

    this.props.fetchCategories()
    this.props.fetchPosts()

      _map(this.props.posts, post => {
      this.props.fetchComments(post.id)
      console.log('mapping')})
      
    console.log(this.props.comments)
  }

  render() {

    return (
      <div>
        <Header />
        <Routes />

        <div className="open-add-post is-primary"><Link to="/addPost">add</Link></div>
      </div>
    )
  }
}

const mapStateToProps = state => {

  return {
    posts: state.posts,
    categories: state.categories,
  }
}

export default withRouter(connect(
  mapStateToProps,
  {fetchCategories, fetchPosts, fetchComments}
)(App))
