import React from 'react'
import { BLUE, DARK_BLUE } from '../../constants/colors'

export default () => (
  <style jsx global>
    {`
      html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
      }

      body {
        margin: 0;
        font-family: 'Montserrat', sans-serif;
      }

      a {
        cursor: hand !important;
        text-decoration: none !important;
        color: ${BLUE};
      }

      a:hover,
      a:focus,
      a:active {
        color: ${DARK_BLUE};
      }

      a:visited {
        color: ${BLUE};
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      span,
      p,
      li,
      a,
      button {
        font-family: 'Montserrat', sans-serif;
      }
    `}
  </style>
)
