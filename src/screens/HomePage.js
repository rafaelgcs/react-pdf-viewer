import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This view is the home page of the test of Pdf Viewer.
        </p>
        <Link
          className="App-link"
          to="/pdf"
          rel="noopener noreferrer"
        >
          Click to see the viewer of PDF
        </Link>
      </header>
    </div>
  );
}

export default App;
