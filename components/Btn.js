import s from 'styled-components'
import Link from 'next/link'
import { BLUE, WHITE, DARK_BLUE } from '../constants/colors'

const BtnWrapper = s.a`
  background: ${BLUE};
  padding: 18px 24px;
  border-radius: 0px;
  color: ${WHITE};
  display: inline-block;
  cursor: pointer;
  margin-bottom: 1rem;
  margin-right: 1.5rem;

  :hover,
  :focus,
  :active {
    background: ${DARK_BLUE};
  }
`

export const Btn = ({ href = '', children }) => {
  if (href) {
    return (
      <Link href={href}>
        <BtnWrapper>
          {children}
        </BtnWrapper>
      </Link>
    )
  }

  return (
    <BtnWrapper>
      {children}
    </BtnWrapper>
  )
}
