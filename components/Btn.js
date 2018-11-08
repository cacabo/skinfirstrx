import s from 'styled-components'
import Link from 'next/link'
import { PURPLE, WHITE } from '../constants/colors'

const BtnWrapper = s.a`
  background: ${PURPLE};
  padding: 12px 24px;
  border-radius: 4px;
  color: ${WHITE};
  display: inline-block;
  cursor: pointer;
  margin-bottom: 1rem;
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
