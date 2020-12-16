import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import ErrorBoundaries from "./components/error-boundaries";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundaries>
      <Router>
        <App/>
      </Router>
    </ErrorBoundaries>
  </React.StrictMode>,
  document.getElementById("root")
);