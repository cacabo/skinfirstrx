import React from 'react'
import PropTypes from 'prop-types'
import s from 'styled-components'

import { Label } from './index'
import {
  BLUE,
  GRAY,
  LIGHT_GRAY,
  WHITE,
} from '../constants/colors'

const InputField = s.input`
  border-radius: 6px;
  font-size: 16px;
  padding: 0.75rem;
  width: 100%;
  outline: 0;
  transition: border 0.2s ease;
  margin-bottom: 1rem;
  box-sizing: border-box;
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

export const Input = ({ // eslint-disable-line
  name = '',
  label = '',
  placeholder = '',
  value = undefined,
  handleChange = () => {},
}) => (
  <div>
    {label && <Label>{label}</Label>}
    <InputField
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  </div>
)

Input.defaultProps = {
  name: '',
  label: '',
  placeholder: '',
  value: undefined,
  handleChange: () => {},
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any, // eslint-disable-line
  handleChange: PropTypes.func,
}
