import React from 'react'
import s from 'styled-components'

import { Text } from '../../components'
import { BORDER, BLUE } from '../../constants/colors'

const Input = s.input`
  border-width: 2px;
  border-style: solid;
  border-color: ${BORDER};
  border-radius: 4px;
  font-size: 16px;
  padding: 0.75rem;
  width: 100%;
  outline: 0;
  transition: border 0.2s ease;
  margin-bottom: 1rem;
  box-sizing: border-box;

  :hover {
    border-color: rgba(0, 0, 0, 0.2);
  }

  :active,
  :focus {
    border-color: ${BLUE};
  }
`

export default ({ name = '', label = '', placeholder = '' }) => (
  <div>
    {label && <Text>{label}</Text>}
    <Input
      name={name}
      placeholder={placeholder}
    />
  </div>
)
