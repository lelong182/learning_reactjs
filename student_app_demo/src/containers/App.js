import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Header} from "../components/Header";
import {HomePage} from "./HomePage";
import StudentPage from "./StudentPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header/>

          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/student" component={StudentPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;