import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import Post from './post'
import Comment from './comment'
import PostList from '../containers/post-list'


class App extends Component {

  componentDidMount() {
  this.props.posts || this.props.getAllPosts();
  this.props.categories || this.props.getAllCategories();
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

function mapStateToProps () {

}

function mapDispatchToProps = dispatch => {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App)
