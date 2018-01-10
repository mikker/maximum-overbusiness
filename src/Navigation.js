import React, { Component } from "react";
import P from "prop-types";
import Viewport from "./Viewport";
import Dingus from "dingus";
import { TransitionGroup } from "react-transition-group";
import Slide from "./animations/Slide";

export default children =>
  class Navigation extends Component {
    constructor(props) {
      super(props);

      this.state = {
        prev: null,
        curr: parseInt(props.match.params.slide, 10)
      };
    }

    componentDidMount() {
      this.dingus = new Dingus();
      this.dingus.on(Dingus.PREV, this.handlePrev);
      this.dingus.on(Dingus.NEXT, this.handleNext);
    }

    componentWillUnmount() {
      this.dingus.destroy();
    }

    componentWillReceiveProps(newProps) {
      const curr = parseInt(newProps.match.params.slide, 10);
      const prev = parseInt(this.props.match.params.slide, 10);

      this.setState(state => ({
        prev: curr !== prev ? prev : null,
        curr
      }));
    }

    handlePrev = () => {
      this.navigate(-1);
    };

    handleNext = () => {
      this.navigate(1);
    };

    navigate = direction => {
      const { history, match: { params } } = this.props;

      const nextSlide = Math.max(
        1,
        Math.min(children.length, parseInt(params.slide, 10) + direction)
      );

      history.push(`/${nextSlide}`);
    };

    getDirection = () => {
      const { prev, curr } = this.state;
      return prev < curr ? "right" : "left";
    };

    render() {
      const { match: { params } } = this.props;
      const { prev, curr } = this.state;

      console.log('%c---', 'color: red')

      return (
        <Viewport>
          <TransitionGroup>
            <Slide direction={this.getDirection} key={curr}>
              {children[curr - 1]}
            </Slide>
          </TransitionGroup>
        </Viewport>
      );
    }
  };
