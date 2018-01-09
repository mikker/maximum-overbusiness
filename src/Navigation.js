import React, { Component } from "react";
import P from "prop-types";
import Viewport from './Viewport'

export default class Navigation extends Component {
  static contextTypes = {
    slides: P.array.isRequired,
    deckProps: P.object.isRequired
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("touchend", this.handleTouchEnd);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("touchend", this.handleTouchEnd);
  }

  handleKeyDown = event => {
    switch (event.keyCode) {
      case 8: // bckspc
      case 33: // pg up
      case 37: // left arr
        this.navigate(-1);
        break;
      case 32: // space
      case 34: // pg dwn
      case 39: // right arr
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
