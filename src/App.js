import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';

import Main from './containers/Main';
import { Tooltip } from '@material-ui/core';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AppLogo}/>
        <Route path="/main" component={Main}/>
      </Switch>
    </Router>
  );
};

function AppLogo() {
  return (
    <div className="App">
      <header className="App-header">
        <Tooltip title='クリックしてください！' placement="top">
          <Link to="/main">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </Tooltip>
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
