import React, { Component } from "react";
import ReactDOM from "react-dom";
import Team, { Teamusers } from "./components/Teamusers";
import User from "./components/User";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Teamusers} />
          <Route path={"/:login"} component={User} />
        </Switch>
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));