import React from "react";
import {Route, Link} from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = ({match}) => (
  <div>
    <h3>{match.params.topicName}</h3>
  </div>
);

const Topics = ({match}) => (
  <div>
    <h2>Topics</h2>

    <ul className="links mgt-20 mgb-20">
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicName`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
);

const BasicExample = () => {
  return (
    <div>
      <h1>Basic Example</h1>
      <ul className="links mgt-20 mgb-20">
        <li><Link to="/basic">Basic - Home</Link></li>
        <li><Link to="/basic/about">Basic - About</Link></li>
        <li><Link to="/basic/topics">Basic - Topics</Link></li>
      </ul>

      <Route exact path="/basic" component={Home}/>
      <Route path="/basic/about" component={About}/>
      <Route path="/basic/topics" component={Topics}/>
    </div>
  );
};

export default BasicExample;