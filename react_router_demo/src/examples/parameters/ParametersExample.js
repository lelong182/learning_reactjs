import React from "react";
import {Route, Link} from "react-router-dom";

const Child = ({match}) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

const ParametersExample = ({match}) => (
  <div>
    <h1>Parameters Example</h1>
    <ul className="links mgt-20 mgb-20">
      <li><Link to="/parameters/netflix">Parameters - Netflix</Link></li>
      <li><Link to="/parameters/zillow-group">Parameters - Zillow Group</Link></li>
      <li><Link to="/parameters/yahoo">Parameters - Yahoo</Link></li>
      <li><Link to="/parameters/modus-create">Parameters - Modus Create</Link></li>
    </ul>

    <Route path={`${match.url}/:id`} component={Child}/>
  </div>
);

export default ParametersExample;