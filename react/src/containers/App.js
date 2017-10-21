import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
} from 'react-router-dom';

import '../styles/containers/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          APPLICATION
        </div>
      </Router>
    );
  }
}

export default App;
