import React, { Component } from "react";
import P from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Navigation from "./Navigation";
import theme from "./themes/blank";

export default class Deck extends Component {
  static defaultProps = {
    theme: theme
  };

  static childContextTypes = {
    theme: P.object.isRequired
  };

  getChildContext() {
    const { theme, ...props } = this.props;

    return {
      theme
    };
  }

  render() {
    const { children } = this.props

    return (
      <Router>
        <Switch>
          <Route path="/:slide" component={Navigation(children)} />
          <Redirect from="/" to="/1" />
        </Switch>
      </Router>
    );
  }
}
