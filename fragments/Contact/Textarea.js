import React from 'react'
import s from 'styled-components'

import { Text } from '../../components'
import { BORDER, PURPLE } from '../../constants/colors'

const Textarea = s.textarea`
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
    border-color: ${PURPLE};
  }
`

export default ({ name = '', label = '', placeholder = '', rows=4 }) => (
  <div>
    {label && <Text>{label}</Text>}
    <Textarea
      rows={rows}
      name={name}
      placeholder={placeholder}
    />
  </div>
)
