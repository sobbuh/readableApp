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
    console.log(this.props)
  }

  render() {
    return (
      <div>
        {console.log(this.props)}
        <Header />
        <Routes />
        <div className="open-add-post is-primary"><Link to="/addPost">add</Link></div>
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
