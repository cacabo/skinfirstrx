import React from 'react'

import content from './content'

export default () => (
  <div>
    {content.map(({ name, retail }) => (
      <div key={name}>
        <p>{name}</p>
        <p>${retail}</p>
      </div>
    ))}
  </div>
)
