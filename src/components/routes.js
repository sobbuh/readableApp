import React, { Component } from 'react'
import HomePage from './homepage'
import PostDetail from './post-detail'
import Categories from './categories';
import { Switch, Route } from 'react-router-dom'
import AddPostForm from './add-post-form'
import CategoryPage from './category-page'
import EditPostForm from './edit-post-form'
import Comment from './comment'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/categories" component={Categories} />
        <Route path="/addpost" component={AddPostForm} />
        <Route path="/:category/:id" component={PostDetail} />
        <Route path="/:category" component={CategoryPage} />
        <Route path="/:category/:id/edit" component={EditPostForm} />
      </Switch>
    );
  }
}

export default Routes;
