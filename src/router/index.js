import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../view/login/index.jsx";
import Home from "../view/home/index.jsx";
import Center from "../view/center/index.jsx";
class MRoute extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/center" component={Center} />
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default MRoute;


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);
