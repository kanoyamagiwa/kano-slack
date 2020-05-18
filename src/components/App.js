import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Index from "./Pages/Index";

class App extends Component {
  render() {
    return (
      <div>
        <div className="ui container">
          <div className="ui secondary pointing menu">
            <Link to="/register" className="item">
              Register
            </Link>
            <Link to="/login" className="item">
              Login
            </Link>
          </div>
        </div>
        <div className="ui segument">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
