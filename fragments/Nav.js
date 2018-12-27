import s from 'styled-components'
import Link from 'next/link'

import { Container } from '../components'
import { BORDER, WHITE } from '../constants/colors'

// TODO mobile nav

const NavSpacer = s.div`
  display: block;
  width: 100%;
  position: relative;
  height: 61px;
`

const NavWrapper = s.nav`
  width: 100%;
  color: white;
  background: ${WHITE};
  padding: 1rem 0;
  position: fixed;
  border-bottom: 1px solid ${BORDER};
  top: 0;
  left: 0;
  right: 0;
  z-index: 1301;
`

const Logo = s.img`
  display: inline-block;
  height: 2.5rem;
  margin: -0.5rem 0;
  cursor: pointer;
`

const Links = s.div`
  display: inline-block;
  float: right;

  a {
    text-decoration: none;
    cursor: hand;
    margin-left: 1.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
    vertical-align: top;
  }
`

const Icon = s.img`
  height: 1.5rem;
  width: auto;
  opacity: 0.375;

  &:hover,
  &:focus,
  &:active {
    opacity: 0.5;
  }
`

export default () => (
  <>
    <NavSpacer />

    <NavWrapper>
      <Container>
        <Link href="/">
          <Logo src="/static/logo.png" alt="Skin First RX Logo" />
        </Link>

        <Links>
          <a href="https://mettrimmd.com/actonma/?gclid=CjwKCAjwpeXeBRA6EiwAyoJPKl3rL26WuXVX7GW_5-ozSFdQgkdwMm6dwIc0X3w8KWwJ66d4M1lvZhoCwOoQAvD_BwE" target="_BLANK">
            MetTrimMD
          </a>
          <a href="https://www.facebook.com/SkinFirstRx">
            <Icon src="/static/facebook.svg" alt="Facebook" />
          </a>
          <a href="https://instagram.com">
            <Icon src="/static/instagram.svg" alt="Instagram" />
          </a>
        </Links>
      </Container>
    </NavWrapper>
  </>
)
