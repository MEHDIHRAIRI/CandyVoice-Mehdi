import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/scss/style.scss";

// pages for this product
import CustomComponents from "./views/custom-components/custom-components.jsx";
import Login from "./views/custom-components/Login.jsx";

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/home" component={CustomComponents} />
      <Route path="/" component={Login} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
