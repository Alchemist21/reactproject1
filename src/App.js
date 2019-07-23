import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (

    <div className="App">
    <>
    
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {' Home'}
    </Navbar.Brand>
  </Navbar>
</>


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Emerging Healthcare Technology
        </p>
        <a
          className="App-link"
          href="https://medtechsolutions.io"
          target="_blank"
          rel="noopener noreferrer"
        >
         Medtechsolutions
        </a>
      </header>
    </div>
  );
}

export default App;
