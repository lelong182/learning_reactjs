import React from "react";
import {NavLink} from 'react-router-dom';
import "./index.css";

export const Header = () => (
  <nav className="navbar navbar-default navbar-static-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                aria-expanded="false" aria-controls="navbar">
          <span>Toggle navigation</span>
        </button>
        <a className="navbar-brand" href="#">Student App Demo</a>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/student">Student</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);