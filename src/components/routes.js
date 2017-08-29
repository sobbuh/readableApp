import React, { Component } from 'react'
import HomePage from './homepage'
import PostDetail from './post-detail'
import Categories from './categories';
import { Route } from 'react-router-dom'
import AddPostForm from './add-post-form'
import CategoryPage from './category-page'
import EditPostForm from './edit-post-form'

class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/categories" component={Categories} />
        <Route path="/categories/:category" component={CategoryPage} />
        <Route exact path="/:category/:id" component={PostDetail} />
        <Route path="/addpost" component={AddPostForm} />
        <Route path="/:category/:id/edit" component={EditPostForm} />

      </div>
    );
  }
}

export default Routes;
