import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCategories, fetchPosts } from '../actions/index.js'
import { Link, withRouter } from 'react-router-dom'
import Routes from './routes'
import Header from './header'

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes />
        <div className="open-add-post is-primary"><a>add</a></div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    categories: state.categories.categories
  }
}

export default withRouter(connect(
  mapStateToProps,
  {fetchCategories, fetchPosts}
)(App))
