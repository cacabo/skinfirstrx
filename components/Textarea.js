import React from 'react'
import PropTypes from 'prop-types'
import s from 'styled-components'

import { Label } from './index'
import {
  LIGHT_GRAY,
  GRAY,
  BLUE,
  WHITE,
} from '../constants/colors'

const TextareaField = s.textarea`
  border-radius: 6px;
  font-size: 16px;
  padding: 0.75rem;
  width: 100%;
  outline: 0;
  transition: border 0.2s ease;
  margin-bottom: 1rem;
  box-sizing: border-box;
  resize: vertical;
  background: ${LIGHT_GRAY};
  border: 2px solid ${LIGHT_GRAY};

  :hover {
    border-color: ${GRAY};
  }

  :active,
  :focus {
    background: ${WHITE};
    border-color: ${BLUE};
  }
`

export const Textarea = ({ // eslint-disable-line
  name = '',
  label = '',
  placeholder = '',
  rows = 4,
  value = undefined,
  handleChange = () => {},
}) => (
  <div>
    {label && <Label>{label}</Label>}
    <TextareaField
      rows={rows}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  </div>
)

Textarea.defaultProps = {
  name: '',
  label: '',
  placeholder: '',
  rows: 4,
  value: undefined,
  handleChange: () => {},
}

Textarea.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  value: PropTypes.any, // eslint-disable-line
  handleChange: PropTypes.func,
}
