import React from "react";
import P from "prop-types";

const Viewport = ({ style, ...props }, { theme: { deck } }) => (
  <div style={{ ...deck, ...style }} {...props} />
);

Viewport.contextTypes = {
  theme: P.object.isRequired
};

export default Viewport;
