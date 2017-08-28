import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/index.js'
import { Link } from 'react-router-dom'

class Categories extends Component {
  componentDidMount(){
      this.props.categories || this.props.fetchCategories();
  }

  render() {
    const {categories} = this.props

    console.log(categories)
    return (
      <div className="column box is-offset-3 is-half">
      <h2 className="has-text-primary has-text-centered">What's Popular?</h2>
      <div className="tags">
        {categories.map(category => <span key={category.name} className="tag"><Link to={`/${category.name}`}
        >{category.name}</Link></span>)}
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

export default connect(mapStateToProps, { fetchCategories })(Categories)
