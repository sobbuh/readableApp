import React, { Component } from 'react'
import { connect } from 'react-redux'

class Categories extends Component {

  componentDidMount(){

  }

  categoryList() {
    return (
      this.props.categories.map(category => {
        <span className="tag">{category.name}</span>
        console.log(category.name)
    }))
  }

  render() {

    return (
      <div className="tags">
        {this.categoryList()}
      </div>

    )
  }
}

function mapStateToProps(state){
  return {
    categories : state.categories.categories
  }
}

export default connect(mapStateToProps)(Categories)
