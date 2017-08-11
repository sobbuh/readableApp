import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import { connect } from 'react-redux'

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
