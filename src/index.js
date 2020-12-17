import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import ErrorBoundaries from "./components/error-boundaries";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage, PostsPage, ProfilePage } from "./components/pages";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundaries>
      <Router>
      <App />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/posts" component={PostsPage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </Router>
    </ErrorBoundaries>
  </React.StrictMode>,
  document.getElementById("root")
);
