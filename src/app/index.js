import React from "react";
import {render} from "react-dom";
import {Header} from "./component/Header";
import {Home} from "./component/Home";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      homeLink: "Home"
    };
    this.onChangeLinkName = this.onChangeLinkName.bind(this);
  }

  onGreet() {
    console.log(123);
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }

  render() {
    var user = {
      name: "Anna",
      hobbies: ["Sport", "Travel"]
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name={"Long"} initialAge={27} greet={this.onGreet} user={user} changeLink={this.onChangeLinkName}/>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));