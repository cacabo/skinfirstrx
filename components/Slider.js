import React, { Component } from 'react'
import SliderComponent from 'react-slick'
import s from 'styled-components'

import { Container, RowSpace } from './index'
import { SHADE, DARK_BLUE, BLUE } from '../constants/colors'

const SIZE = '2.5rem'

const SliderWrapper = s.div`
  display: block;
`

const ArrowContainer = s(Container)`
  margin-top: 0.75rem;
  position: absolute;
  z-index: 2;
`

const Arrow = s.div`
  border-radius: 50%;
  display: inline-block;
  width: ${SIZE};
  height: ${SIZE};
  margin-right: 1rem;
  background: ${BLUE};
  box-shadow: 0px 2px 4px ${SHADE};
  transition: all 0.2s ease;
  opacity: 1;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: ${DARK_BLUE};
  }
`

const Chevron = s.img`
  width: ${SIZE};
  height: auto;
`

export class Slider extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
  }

  next() {
    this.slider.slickNext()
  }

  prev() {
    this.slider.slickPrev()
  }

  render() {
    const { children, settings } = this.props

    return (
      <SliderWrapper>
        <SliderComponent ref={component => (this.slider = component)} {...settings}>
          { children }
        </SliderComponent>

        <ArrowContainer>
          <Arrow onClick={this.prev}>
            <Chevron src="/static/icons/chevron-left.svg" />
          </Arrow>
          <Arrow onClick={this.next}>
            <Chevron src="/static/icons/chevron-right.svg" />
          </Arrow>
        </ArrowContainer>

        <RowSpace />
      </SliderWrapper>
    )
  }
}
