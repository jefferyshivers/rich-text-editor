import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/containers/NotesList.css'

class NotesList extends Component {
  render() {
    return(
      <div className="NotesList">
      </div>
    )
  }
}

export default connect(
  null,
  null
)(NotesList);