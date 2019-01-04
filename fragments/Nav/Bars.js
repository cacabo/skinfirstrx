import s from 'styled-components'

import { minWidth, MD } from '../../constants/widths'
import { BLACK } from '../../constants/colors'

const Wrapper = s.div`
  width: 16px;
  padding-top: 10px;
  display: inline-block;
  float: right;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  ${minWidth(MD)} {
    display: none;
  }
`

const Bar = s.span`
  width: 16px;
  height: 2px;
  margin-bottom: 3px;
  display: block;
  background: ${BLACK};
  margin-left: auto;
`

export default ({ handleClick }) => (
  <Wrapper onClick={handleClick}>
    <Bar />
    <Bar />
    <Bar />
  </Wrapper>
)
