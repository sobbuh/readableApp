import React, {Component} from 'react'
import { connect } from 'react-redux'

class CategoryPage extends Component {



}

function mapStateToProps(state){
  return {
    categories : state.categories
  }
}


export default connect(mapStateToProps)(CategoryPage)
