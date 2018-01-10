<p align='center'>
  <img src="https://s3.brnbw.com/maximum-overbusiness-AUAy78UaQh.gif" alt="MAXIMUM OVERBUSINESS" /><br />
  <strong>MAXIMUM OVERBUSINESS</strong> is a tool for building presentations as websites using React.
</p>

---

* [Demo](https://maximum-overbusiness.now.sh) ([Source](https://github.com/mikker/maximum-overbusiness/blob/master/demo/src/index.js))

## Usage

```javascript
import React from "react"
import { render } from "react-dom"
import { Deck, Slide } from "maximum-overbusiness"

const Presentation = () => (
  <Deck>
    <Slide>Many graphs</Slide>
    <Slide>very Q4</Slide>
    <Slide>Always Be Closing (your jsx)</Slide>
  </Deck>
);

render(<Presentation />, document.getElementById('root'));
```

See [the Demo](https://maximum-overbusiness.now.sh) for more advanced usage and introduction.

Change slides with `space`, `<-`, `->` or your [wireless presentation dingus](https://github.com/mikker/dingus).

For maximum Developer Experience, offline support and more, use along with [create-react-app](https://github.com/facebookincubator/create-react-app).

## License

MIT
