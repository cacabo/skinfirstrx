import s from 'styled-components'
import Link from 'next/link'
import { BLUE, WHITE, DARK_BLUE } from '../constants/colors'

const BtnWrapper = s.a`
  background: ${BLUE};
  padding: 18px 24px;
  border-radius: 6px;
  color: ${WHITE};
  display: inline-block;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: 1.5rem;
  font-weight: bold;
  transition: all 0.2s ease;

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
