import React from "react";
import Header from "../header";
import WithBloggerApiService from "../hoc";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import { HomePage, PostsPage, ProfilePage } from "../pages";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Container>
        <h1>Hello im your App</h1>
        <p>Let`s create something great!</p>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/posts" component={PostsPage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </Container>
    </div>
  );
};

export default WithBloggerApiService()(App);
