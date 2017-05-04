import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import BasicExample from "./examples/basic/BasicExample";
import ParametersExample from "./examples/parameters/ParametersExample";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <div className="App-content">
            <h3>List Examples:</h3>
            <ul className="links mgt-20 mgb-20">
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/basic">
                  Basic
                </Link>
              </li>
              <li>
                <Link to="/parameters">
                  URL Parameters
                </Link>
              </li>
            </ul>

            <hr/>

            <Switch>
              <Route exact path="/" render={() => (<h3>Please select a example.</h3>)}/>
              <Route path="/basic" component={BasicExample}/>
              <Route path="/parameters" component={ParametersExample}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
