import React from "react";
import { Slide } from "./";

export const Title = ({ children, ...props }) => (
  <Slide {...props}>
    <h1>{children}</h1>
  </Slide>
);

export const IFrame = ({ src, children, style, ...props }) => (
  <Slide style={{ ...style, flexFlow: "column" }} {...props}>
    <header style={{ flex: "0 0 auto" }}>
      <input type="text" value={src} readOnly />
      {children}
    </header>
    <iframe
      src={src}
      title="slide"
      {...props}
      style={{ flex: "1 1 auto", width: "100%", border: "0" }}
    />
  </Slide>
);
