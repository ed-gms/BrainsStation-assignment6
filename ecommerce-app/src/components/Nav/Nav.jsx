import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div className="navbar navbar-light">
        <a className="navbar-brand text-light">E-Commerce App</a>
        <ul>
        <Link to="/"> <span>HOME</span> </Link>
        <Link to="/shop"> <span>SHOP</span> </Link>
        </ul>
      </div>
    );
  }
}

export default Nav;
