import React, { Component } from "react";
import { render } from "react-dom";

import { Deck, Slide } from "../../src";
import { Title, IFrame } from "../../src/templates";

import "./index.css";

class Demo extends Component {
  render() {
    return <Deck>
      <Title>1</Title>
      <Title>2</Title>
      <Title>3</Title>
      <Title>4</Title>
      <Title>5</Title>
      <Title>6</Title>
      <Title>7</Title>
      <IFrame src="https://example.com">Caption</IFrame>
    </Deck>
  }
}

render(<Demo />, document.querySelector("#demo"));
