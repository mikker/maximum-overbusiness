import React from "react";
import { Transition } from "react-transition-group";

const duration = 500;

const defaultStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'pink',
  transition: `transform ${duration}ms linear`
};

const transitionStyles = {
  left: {
    entering: { transform: "translate(-100%, 0)", background: 'yellow', zIndex: 100 },
    entered: { transform: "translate(0, 0)", background: 'green' },
    exiting: { transform: "translate(100%, 0)", background: 'red' }
  },
  right: {
    entering: { transform: "translate(100%, 0)", background: 'yellow', zIndex: 100 },
    entered: { transform: "translate(0, 0)", background: 'green' },
    exiting: { transform: "translate(-100%, 0)", background: 'red' }
  }
};

const Slide = ({ in: in_, direction, children, key }) => (
  <Transition
    in={in_}
    timeout={{ enter: 0, exit: duration }}
    unmountOnExit
  >
    {state => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[direction()][state]
        }}
      >
        {console.log(
          state,
          React.Children.only(children).props.children,
          direction()
        )}
        {children}
      </div>
    )}
  </Transition>
);

export default Slide;
