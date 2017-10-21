import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  Editor, 
  EditorState,
  convertFromRaw, 
  convertToRaw } from 'draft-js';

import '../styles/containers/Note.css'

class Note extends Component {
  render() {
    function currentNote(note) {
      return note.id === this.props.current_note_index
    }

    let note_content = (this.props.current_note_index === null)
      ? "Select a note from the left to view, or make a new one!"
      : (
        <div>
          {
            this.props.notes[this.props.current_note_index].body
          }
        </div>
      )

    return(
      <div className="Note">
        {note_content}
      </div>
    )
  }
}

export default connect(
  null,
  null
)(Note);