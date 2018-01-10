import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import { Deck, Slide } from 'src/'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('doesn\'t explode', () => {
    render(<Deck><Slide>ok</Slide></Deck>, node, () => {
      expect(node.innerHTML).toContain('div')
    })
  })
})
