import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/containers/NotesList.css'

class NotesList extends Component {
  constructor(props) {
    super(props)
    this.focusNote = this.focusNote.bind(this)
  }

  focusNote(e) {
    this.props.focusNote(e.target.id)
  }

  render() {
    const notes = this.props.notes.map((note, index) => {
      return(
        <div 
          key={index}
          id={index}
          onClick={this.focusNote}
          className="note-list-tile">
          {note.title}
        </div>
      )
    })
    return(
      <div className="NotesList">
        {notes}
      </div>
    )
  }
}

export default connect(
  null,
  null
)(NotesList);