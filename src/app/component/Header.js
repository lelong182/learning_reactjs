import React from "react";

export const Header = (props) => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <ul className="nav navbar-nav">
          <li>
            <a href="#">{props.homeLink}</a>
          </li>
          <li>
            <a href="#">User</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);