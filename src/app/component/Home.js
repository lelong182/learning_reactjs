import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: "Home 2"
    };
    setTimeout(() => {
      this.setState({
        status: 1
      });
    }, 3000);
    this.onChangeLink = this.onChangeLink.bind(this);
  }

  onMakeOlder = () => {
    this.setState(prevState => ({
      age: prevState.age + 3
    }));
  };

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  render() {
    return (
      <div>
        <p>In a new component!</p>
        <p>Your name is {this.props.name}</p>
        <p>Your age is {this.state.age}</p>
        <p>Status: {this.state.status}</p>
        <div>
          <ul>
            {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
          </ul>
        </div>
        <hr/>
        <button onClick={this.onMakeOlder} className="btn btn-primary">Make me older!</button>
        <hr/>
        <button onClick={this.props.greet} className="btn btn-primary">Say hello!</button>
        <hr/>
        <button onClick={this.onChangeLink} className="btn btn-primary">Change Link</button>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  initialAge: PropTypes.number,
  greet: PropTypes.func,
  changeLink: PropTypes.func,
  user: PropTypes.object
}