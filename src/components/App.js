import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { fetchCategories, fetchPosts, fetchComments } from '../actions/index.js'
import { Link, withRouter } from 'react-router-dom'
import Routes from './routes'
import Header from './header'
import _map from 'lodash.map'
import _ from 'lodash'
import { bindActionCreators } from 'redux'

class App extends Component {
  componentDidMount() {

    this.props.fetchCategories()
    console.log('fetched categories')
    this.props.fetchPosts().
    then(() => _map(this.props.posts, post => {
     this.props.fetchComments(post.id)}))
}

  render() {


    console.log(this.props)

    return (
      <div>
        <Header />
        <Routes />

        <div className="open-add-post is-primary"><Link to="/addPost">add</Link></div>
      </div>
    )
  }
}

const mapStateToProps = state => {

  return {
    posts: state.posts,
    categories: state.categories,
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchCategories, fetchPosts, fetchComments}, dispatch )
}

export default withRouter(connect(
  mapStateToProps,mapDispatchToProps)(App))
