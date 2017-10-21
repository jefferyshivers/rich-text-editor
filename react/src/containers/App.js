import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
} from 'react-router-dom';

import '../styles/containers/App.css';

import NotesList from './NotesList';
import Note from './Note';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      current_note_index: null
    }
    this.focusNote = this.focusNote.bind(this)
  }

  componentDidMount() {
    let user_id = document.getElementById('all').dataset.currentuserid
    fetch(`/api/users/${user_id}/notes`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        return response.json();
      })
      .then(body => {
        this.setState({
          notes: body.notes
        })
      })
  }

  focusNote(id) {
    this.setState({
      current_note_index: id
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NotesList 
            focusNote={this.focusNote} 
            notes={this.state.notes} 
            current_note_index={this.state.current_note_index} />
          <Note 
            notes={this.state.notes}
            current_note_index={this.state.current_note_index} />
        </div>
      </Router>
    );
  }
}

export default App;
