import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import Post from './post'
import Comment from './comment'


class App extends Component {

  state = {
  posts: null,
  categories: null,
  comments: null
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

        <Post title={"Hello Voter"} body={"this worked!"} owner={"Sobbuh"} timestamp={"9:17 Aug 12 17"} score={0}  />
      </div>
    );
  }
}

function mapStateToProps () {

}

function mapDispatchToProps (dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App)
