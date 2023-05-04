import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/navbar-folder/Navbar';
import './components/navbar-folder/Navbar.css';
import Form from './components/form-folder/Form'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <h1>Welcome to my React App</h1>
      <p>This is an example implementation of a navbar in React.</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Form />

    </div>
  );
}

export default App;
