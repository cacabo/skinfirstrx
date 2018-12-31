import s from 'styled-components'
import Link from 'next/link'

import { Container } from '../components'
import { BORDER, WHITE } from '../constants/colors'

const INNER_HEIGHT = '2rem'
const NAV_HEIGHT = '2.5rem'

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
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: calc(1rem + 2.5%);
  padding-right: calc(1rem + 2.5%);
  position: fixed;
  border-bottom: 1px solid ${BORDER};
  top: 0;
  left: 0;
  right: 0;
  z-index: 1301;
  box-sizing: border-box;
  display: flex;
`

const Logo = s.img`
  display: inline-block;
  height: ${NAV_HEIGHT};
  margin: -0.25rem 1rem -0.25rem 0rem;
  cursor: pointer;
`

const Links = s.div`
  display: inline-block;
  height: ${INNER_HEIGHT};

  a {
    text-decoration: none;
    cursor: hand;
    margin-left: 1.5rem;
    font-size: 1rem;
    line-height: 2rem;
    vertical-align: top;
  }
`

const RightLinks = s(Links)`
  margin-left: auto;
`

const Icon = s.img`
  margin-top: 0.375rem;
  height: 1.25rem;
  width: auto;
  opacity: 0.25;

  &:hover,
  &:focus,
  &:active {
    opacity: 0.375;
  }
`

export default () => (
  <>
    <NavSpacer />

    <NavWrapper>
      <Link href="/">
        <Logo src="/static/logo.png" alt="Skin First RX Logo" />
      </Link>

      <Links>
        <a href="#consultation">
          Consultation
        </a>
        <a href="#services">
          Services
        </a>
        <a href="#products">
          Products
        </a>
        <a href="#testimonials">
          Testimonials
        </a>
        <a href="#providers">
          Providers
        </a>
        <a href="#faq">
          FAQ
        </a>
        <a href="#contact">
          Contact
        </a>
      </Links>
      <RightLinks>
        <a href="https://mettrimmd.com/actonma/?gclid=CjwKCAjwpeXeBRA6EiwAyoJPKl3rL26WuXVX7GW_5-ozSFdQgkdwMm6dwIc0X3w8KWwJ66d4M1lvZhoCwOoQAvD_BwE" target="_BLANK">
          MetTrimMD
        </a>
        <a href="https://www.facebook.com/SkinFirstRx">
          <Icon src="/static/icons/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://instagram.com">
          <Icon src="/static/icons/instagram.svg" alt="Instagram" />
        </a>
      </RightLinks>
    </NavWrapper>
  </>
)
