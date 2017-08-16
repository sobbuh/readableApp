import React, { Component } from 'react'
import { withRouter } from 'react-router';
import Posts from './posts'
import Categories from './categories';
import { Route } from 'react-router-dom'

class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Posts} />
        <Route path="/categories" component={Categories} />
      </div>
    );
  }
}

export default Routes;
