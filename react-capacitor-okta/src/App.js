import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';
import './App.css';

// Pages
import Home from './Home';

const config = require('./okta.config.json');

const oktaConfig = {
  issuer: `${config.organisationUrl}/oauth2/default`,
  redirect_uri: `${window.location.origin}/implicit/callback`,
  client_id: config.clientId,
};

function App() {
  return (
    <Router>
      <Security issuer={oktaConfig.issuer}
                client_id={oktaConfig.client_id}
                redirect_uri={oktaConfig.redirect_uri}
      >
        <Route path='/' exact={true} component={Home}/>
        <Route path='/implicit/callback' component={ImplicitCallback}/>
      </Security>
    </Router>
  );
}

export default App;
