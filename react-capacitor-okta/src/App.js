import React from 'react';
import { Security, ImplicitCallback } from '@okta/okta-react';
import logo from './logo.svg';
import './App.css';
const config = require('./okta.config.json');

const oktaConfig = {
  issuer: config.organisationUrl,
  redirect_uri: `${window.location.origin}/implicit/callback`,
  client_id: config.clientId,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
    </div>
  );
}

export default App;
