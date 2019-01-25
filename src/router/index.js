import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../view/login/index.jsx";
import Home from "../view/home/index.jsx";
class MRoute extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default MRoute;
