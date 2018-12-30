import React from 'react'
import s from 'styled-components'

import { Label } from '../../components'
import { BLUE, GRAY, LIGHT_GRAY, WHITE } from '../../constants/colors'

const Input = s.input`
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

export default ({ name = '', label = '', placeholder = '' }) => (
  <div>
    {label && <Label>{label}</Label>}
    <Input
      name={name}
      placeholder={placeholder}
    />
  </div>
)
