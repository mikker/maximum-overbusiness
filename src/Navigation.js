import React, { Component } from "react";
import P from "prop-types";
import Viewport from "./Viewport";
import Dingus from "dingus";

export default class Navigation extends Component {
  static contextTypes = {
    slides: P.array.isRequired,
    deckProps: P.object.isRequired
  };

  componentDidMount() {
    this.dingus = new Dingus();
    this.dingus.on("*", this.handleClicker);
    // window.addEventListener("touchend", this.handleTouchEnd);
  }

  componentWillUnmount() {
    this.dingus.destroy();
    // window.removeEventListener("touchend", this.handleTouchEnd);
  }

  handleClicker = (button, event) => {
    switch (button) {
      case Dingus.PREV:
        this.navigate(-1);
        break;
      case Dingus.NEXT:
        this.navigate(1);
        break;
      default:
        break;
    }
  };

  handleTouchEnd = event => {
    this.navigate(1);
  };

  navigate = direction => {
    const { history, match: { params } } = this.props;
    const { slides } = this.context;

    const nextSlide = Math.max(
      1,
      Math.min(slides.length, parseInt(params.slide, 10) + direction)
    );

    history.push(`/${nextSlide}`);
  };

  render() {
    const { match: { params } } = this.props;
    const { slides, deckProps } = this.context;
    const slideIndex = parseInt(params.slide, 10) - 1;

    return <Viewport {...deckProps}>{slides[slideIndex]}</Viewport>;
  }
}
