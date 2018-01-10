import React, { Component } from "react";
import { render } from "react-dom";

import { Deck, Slide as Default } from "../../src";
import Confetti from "./Confetti";

import "./index.css";

class Demo extends Component {
  render() {
    return (
      <Deck>
        <TitleSlide>maximum-overbusiness</TitleSlide>
        <ImageSlide src={require("./maximum overbusiness.gif")}>
          ⚡️👔💼
        </ImageSlide>
        <TitleSlide>Every slide is a separate component</TitleSlide>
        <SerifSlide>&hellip; that may look however you want them to</SerifSlide>
        <TitleSlide>You can even make them be iframes eg:</TitleSlide>
        <IFrameSlide src="http://example.com" />
        <Default>
          Out of the box though, it's pretty boring. On purpose! It gets out of
          the way and lets you build your weird-ass slides like you want 'em.
        </Default>
        <Slide>
          <Confetti
            style={{
              flex: "1 0 100%",
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <h1>Yay! 🦄</h1>
          </Confetti>
        </Slide>
      </Deck>
    );
  }
}

const fontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, ' +
  'Ubuntu, Cantarell, "Helvetica Neue", sans-serif';

const Slide = ({ style, ...props }) => (
  <Default
    style={{
      fontFamily,
      fontSize: "300%",
      textAlign: "center",
      ...style
    }}
    {...props}
  />
);

const TitleSlide = ({ children, style, textStyle, ...props }) => (
  <Slide
    style={{
      padding: "50px",
      ...style
    }}
    {...props}
  >
    <h1 style={textStyle}>{children}</h1>
  </Slide>
);

const ImageSlide = ({ children, src, alt, width, ...props }) => (
  <Slide {...props}>
    <figure style={{ flex: "1 1 auto" }}>
      <img src={src} alt={alt} />
      <figcaption>{children}</figcaption>
    </figure>
  </Slide>
);

const SerifSlide = ({ ...props }) => (
  <TitleSlide
    style={{
      fontFamily: "'Baskerville', serif",
      fontStyle: "italic",
      background: "papayawhip",
      color: "purple"
    }}
    textStyle={{ fontWeight: 300 }}
    {...props}
  />
);

const IFrameSlide = ({ src, ...props }) => (
  <Default
    style={{
      background: "black",
      flex: "1 1 auto",
      display: "flex",
      flexFlow: "column"
    }}
  >
    <header
      style={{
        flex: "0 0 auto",
        width: "100%",
        padding: "8px",
        background: "#111",
        textAlign: "center"
      }}
    >
      <input
        type="text"
        style={{
          border: 0,
          background: "#333",
          color: "#ccc",
          padding: "5px 10px",
          borderRadius: "5px",
          width: "50%"
        }}
        value={src}
        readOnly
      />
    </header>
    <iframe
      src={src}
      title="slide"
      style={{ flex: "1 1 auto", width: "100%", border: 0 }}
    />
  </Default>
);

render(<Demo />, document.querySelector("#demo"));
