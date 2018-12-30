import s from 'styled-components'

import { maxWidth, SM } from '../../constants/widths'

const Face = s.img`
  position: absolute;
  z-index: -1;
  width: 52.5%;
  right: 0;
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";

  ${maxWidth(SM)} {
    display: none;
  }
`


export default () => (
  <Face src="static/face-2.png" alt="Perfect skin starts here" />
)
