import React, { Component } from "react";
import { render } from "react-dom";

import { Deck, Slide } from "../../src";

import "./index.css";

class Demo extends Component {
  render() {
    return <Deck>
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      <Slide>4</Slide>
      <Slide>5</Slide>
      <Slide>6</Slide>
      <Slide>7</Slide>
    </Deck>
  }
}

render(<Demo />, document.querySelector("#demo"));
