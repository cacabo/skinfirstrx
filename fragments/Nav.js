import s from 'styled-components'
import { Container } from '../components'
import { BORDER } from '../constants/colors'

const NavWrapper = s.nav`
  width: 100%;
  color: white;
  background: white;
  padding: 1rem 0;
  border-bottom: 1px solid ${BORDER};
`

const Logo = s.img`
  display: inline-block;
  height: 2.5rem;
  margin: -0.5rem 0;
`

const Links = s.div`
  display: inline-block;
  float: right;

  a {
    margin-left: 1.5rem;
    line-height: 1.5rem;
    vertical-align: center;
  }
`

export default () => (
  <NavWrapper>
    <Container>
      <Logo src="/static/logo.png" alt="Skin First RX Logo" />
      <Links>
        <a href="https://mettrimmd.com/actonma/?gclid=CjwKCAjwpeXeBRA6EiwAyoJPKl3rL26WuXVX7GW_5-ozSFdQgkdwMm6dwIc0X3w8KWwJ66d4M1lvZhoCwOoQAvD_BwE">MetTrimMD</a>
        <a href="">Facebook</a>
        <a href="">Instagram</a>
      </Links>
    </Container>
  </NavWrapper>
)
