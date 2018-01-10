import React from "react";
import P from "prop-types";

const Slide = ({ style, ...props }, { theme: { slide: slideTheme } }) => (
  <div style={{ ...slideTheme, ...style }} {...props} />
);

Slide.contextTypes = {
  theme: P.object.isRequired
};

export default Slide;
