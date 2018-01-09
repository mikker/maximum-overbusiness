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
    slides: P.array.isRequired,
    deckProps: P.object.isRequired,
    theme: P.object.isRequired
  };

  getChildContext() {
    const { theme, slides, ...props } = this.props;

    return {
      slides,
      deckProps: props,
      theme
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:slide" component={Navigation} />
          <Redirect from="/" to="/1" />
        </Switch>
      </Router>
    );
  }
}
