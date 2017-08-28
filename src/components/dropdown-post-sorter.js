import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeOrder } from '../actions'

class DropdownPostSorter extends Component{

  render() {
  return (
  <div className="level-right">
    <div className="level-item">
      <div className="dropdown is-hoverable is-right">
        <div className="dropdown-trigger">
          <button className="button is-primary" aria-haspopup="true" aria-controls="dropdown-menu3">
            <span>Sort By</span>
            <span className="icon is-small">
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu3" role="menu">
          <div className="dropdown-content">
            <a className="dropdown-item" onClick={() => this.props.changeOrder('voteScore')}>
              Highest Score
            </a>
            <a className="dropdown-item" onClick={() => {
            console.log('selected newest')
            this.props.changeOrder('timestamp')}
              }>
              Newest
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}
}

function mapStateToProps(state){
  return {
    orderBy : state.orderBy
  }
}

export default connect(mapStateToProps, {changeOrder})(DropdownPostSorter)
