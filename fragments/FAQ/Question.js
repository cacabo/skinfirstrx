import s from 'styled-components'
import React, { Component } from 'react'

import { Text } from '../../components'
import { GRAY, LIGHT_GRAY, WHITE } from '../../constants/colors'
import { SM, maxWidth } from '../../constants/widths'

const QuestionWrapper = s.div`
  background: ${WHITE};
  border-top: 1px solid ${GRAY};
  overflow: hidden;
`

const Top = s.div`
  display: block;
  width: 100%;
  cursor: pointer;
  padding: 1.5rem;
  z-index: 1;
  position: relative;

  ${maxWidth(SM)} {
    padding: 1rem;
  }
`

const QuestionText = s(Text)`
  margin: 0;
`

const Body = s(Text)`
  transition: all 0.5s ease;
  margin: 0;
  padding: 0 1.5rem;
  z-index: 0;

  ${maxWidth(SM)} {
    padding: 0 1rem;
  }

  ${({ active }) => active ? (`
    max-height: 100vh;
    opacity: 1;
    padding-bottom: 1.5rem;

    ${maxWidth(SM)} {
      padding-bottom: 1rem;
    }
  `) : (`
    max-height: 0;
    padding-bottom: 0;
    opacity: 0;
  `)}
`

const Arrow = s.img`
  display: inline-block;
  height: 8px;
  margin-top: 8px;
  transition: all 0.25s ease;
  float: right;

  ${({ active }) => active && `
    transform: rotateZ(-180deg);
  `}
`

class Question extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { active } = this.state

    this.setState({ active: !active })
  }

  render() {
    const { title, body } = this.props
    const { active } = this.state

    return (
      <QuestionWrapper>
        <Top onClick={this.handleClick}>
          <QuestionText>
            <strong>{title}</strong>

            <Arrow src="/static/icons/chevron-down.svg" active={active} />
          </QuestionText>
        </Top>

        <Body active={active}>
          {body}
        </Body>
      </QuestionWrapper>
    )
  }
}

export default Question
