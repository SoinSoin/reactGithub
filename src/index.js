import React, { Component } from "react";
import ReactDOM from "react-dom";
import Team, { Teamusers } from "./components/Teamusers";
import User from "./components/User";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      onRecup: ""
    };
  }
  valTarget() {
    this.setState({
      onRecup: e => {
        alert(`${e.target.dataset.target}`);
      }
    });
  }
  componentDidMount() {
    this.valTarget();
  }

  render() {
    const { onRecup } = this.state;
    return (

      <Router>
        <div className="App">
          <p>test {this.state.onRecup}</p>
          <Route exact path="/">
            <Teamusers recup={this.state.onRecup} />
          </Route>
          <Route path={"/" + onRecup} component={User} />
          {console.log(() => this.state.onRecup())}
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
