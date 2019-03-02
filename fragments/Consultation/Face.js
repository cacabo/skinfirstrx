import React from 'react'
import s from 'styled-components'

import { maxWidth, SM } from '../../constants/widths'

const Face = s.img`
  position: absolute;
  z-index: -1;
  max-width: 75%;
  max-height: 100vh;

  ${maxWidth(SM)} {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH";
    max-width: none;
    max-height: none;
    width: 100%;
    opacity: 0.75;
  }
`

export default () => (
  <Face src="/static/face.png" alt="Perfect skin starts here" />
)
