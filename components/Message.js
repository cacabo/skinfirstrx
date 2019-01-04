import s from 'styled-components'

import {
  PINK,
  RED,
  LIGHT_BLUE,
  BLUE,
  DARK_BLUE,
  BLUE_BORDER,
  RED_BORDER,
} from '../constants/colors'

import { Text } from './index'

const Wrapper = s.div`
  width: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
`

const ErrorWrapper = s(Wrapper)`
  background: ${PINK};
  color: ${RED};
  border-color: ${RED_BORDER};
`

const SuccessWrapper = s(Wrapper)`
  background: ${LIGHT_BLUE};
  color: ${DARK_BLUE};
  border-color: ${BLUE_BORDER};
`

export const ErrorMessage = ({ message = '' }) => {
  if (!message) return null

  return (
    <ErrorWrapper>
      <Text>{message}</Text>
    </ErrorWrapper>
  )
}

export const SuccessMessage = ({ message = '' }) => {
  if (!message) return null

  return (
    <SuccessWrapper>
      <Text>{message}</Text>
    </SuccessWrapper>
  )
}
