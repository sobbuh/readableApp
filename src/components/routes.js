import React, { Component } from 'react'
import { withRouter } from 'react-router';
import Posts from './posts'
import PostPage from './post-page'
import Categories from './categories';
import { Route } from 'react-router-dom'
import AddPostForm from './add-post-form'

class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Posts} />
        <Route path="/categories" component={Categories} />
        <Route path="/:category/:id" component={PostPage} />
        <Route path="/addpost" component={AddPostForm} />
      </div>
    );
  }
}

export default Routes;
