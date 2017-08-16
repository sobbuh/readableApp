import React, { Component } from 'react'
import { connect } from 'react-redux'

class Categories extends Component {

  


  categoryList() {
    if (Array.isArray(this.props.categories))
    {
      console.log(this.props.categories)
      return this.props.categories.map(category => {
        <span className="tag">{category.name}</span>
      })}
      else {
        return []
      }
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
