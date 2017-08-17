import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div className="hero is-primary">
        <header className="nav">
          <div className="container">
            <div className="nav-left">
              <a className="nav-item">
                <img src="./img/voter.png" alt="Logo" />
              </a>
            </div>
            <span className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className="nav-right nav-menu">
              <Link to="/" className="nav-item is-active">
                Home
              </Link>
              <Link to="/categories" className="nav-item">
              Categories
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}
}
