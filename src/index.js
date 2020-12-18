import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import ErrorBoundaries from "./components/error-boundaries";
import BloggerApiService from "./services/blogger-api-service";
import { BloggerApiProvider } from "./components/blogger-api-service-context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundaries>
      <BloggerApiProvider value={BloggerApiService}>
        <Router>
          <App/>

        </Router>
      </BloggerApiProvider>
    </ErrorBoundaries>
  </React.StrictMode>,
  document.getElementById("root")
);
