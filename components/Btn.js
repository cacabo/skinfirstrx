import s from 'styled-components'
import Link from 'next/link'
import { BLUE, WHITE, DARK_BLUE } from '../constants/colors'

const styles = `
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

const BtnWrapper = s.a`${styles}`

const BtnInput = s.input`${styles}`

export const Btn = ({ href = '', children, isInput, handleClick }) => {
  if (href) {
    return (
      <Link href={href}>
        <BtnWrapper>
          {children}
        </BtnWrapper>
      </Link>
    )
  }

  if (isInput) {
    return (
      <BtnInput
        type="submit"
        value={children}
      />
    )
  }

  return (
    <BtnWrapper onClick={handleClick}>
      {children}
    </BtnWrapper>
  )
}
