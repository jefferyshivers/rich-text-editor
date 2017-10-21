import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/containers/Nav.css'

class Nav extends Component {

  render() {
    const sign_out = () => {
      fetch('/users/sign_out.json', {
        credentials: 'same-origin',
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
    }
    return(
      <div className="Nav">
        <button onClick={sign_out}>SIGN OUT</button>
      </div>
    )
  }
}

export default connect(
  null,
  null
)(Nav);