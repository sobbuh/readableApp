import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import PostList from '../containers/post-list'
import { bindActionCreators } from 'redux'
import { fetchCategories, fetchPosts } from '../actions/index.js'


class App extends Component {
  componentDidMount() {
  this.props.fetchCategories();
  this.props.fetchPosts();
  console.log(this.props)
}


  render() {
    return (
      <div>
        <section className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Voter
              </h1>
              <h2 className="subtitle">
                A react-based reddit clone
              </h2>
            </div>
          </div>
        </section>
        <PostList />
      </div>
    );
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
