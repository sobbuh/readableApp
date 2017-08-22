import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/index.js'

class Categories extends Component {
  componentDidMount(){


  }

  render() {
    const {categories} = this.props.categories
    return (
      <div className="column box is-offset-3 is-half">
      <h2 className="has-text-primary has-text-centered">Popular Categories</h2>
      <div className="tags">
        {categories.map(category => <span className="tag">{category}</span>)}
      </div>
    </div>
    )
  }
}

function mapStateToProps(state){
  return {
    categories : state.categories
  }
}

export default connect(mapStateToProps)(Categories)
