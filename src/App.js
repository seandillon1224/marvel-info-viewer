import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import Home from "./containers/Home";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </>
    );
  }
}

export default App;
