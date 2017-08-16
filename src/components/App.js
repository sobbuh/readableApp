import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import PostList from '../containers/post-list'
import AddPostForm from '../components/add-post-form'
import { bindActionCreators } from 'redux'
import { fetchCategories, fetchPosts } from '../actions/index.js'
import { Link } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
  this.props.fetchCategories();
  this.props.fetchPosts();
  console.log(this.props)
}


  render() {
    return (
      <div>

        <div className="hero is-primary">
          <header className="nav">
            <div className="container">
              <div className="nav-left">
          <a className="nav-item">
            <img src="./img/voter.png" alt="Logo" />
          </a>
        </div>
        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="nav-right nav-menu">
          <a className="nav-item is-active">
            Home
          </a>
          <Link to="/categories" className="nav-item">
            Categories
          </Link>
        </div>
      </div>
    </header>
  </div>

        <PostList />
        <AddPostForm />
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

export default connect(
  mapStateToProps,
  {fetchCategories, fetchPosts}
  )(App)
