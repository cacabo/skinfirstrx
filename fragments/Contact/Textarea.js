import React from 'react'
import s from 'styled-components'

import { Label } from '../../components'
import { LIGHT_GRAY, GRAY, BLUE } from '../../constants/colors'

const Textarea = s.textarea`
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
    border-color: ${BLUE};
  }
`

export default ({ name = '', label = '', placeholder = '', rows=4 }) => (
  <div>
    {label && <Label>{label}</Label>}
    <Textarea
      rows={rows}
      name={name}
      placeholder={placeholder}
    />
  </div>
)
