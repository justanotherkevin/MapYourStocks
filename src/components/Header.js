import React, { Component } from 'react';
import logo from '../logo.svg';
import '../stylesheets/header.css';

class Header extends Component {
  render() {
    
    return (
      <div className="Container-header">
        <div className="Header-header">
          <h2>{this.props.title}</h2>
          <img src={logo} className="Header-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default Header;
