import React, { Component } from "react";
import { render } from "react-dom";

import "./index.css";

import { Deck, Slide } from "../../src";
import { IFrame, Title } from "../../src/templates";

const slides = [
  <Title>1</Title>,
  <IFrame src="https://brnbw.com">Caption</IFrame>
];

class Demo extends Component {
  render() {
    return <Deck slides={slides} />;
  }
}

render(<Demo />, document.querySelector("#demo"));
