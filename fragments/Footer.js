import s from 'styled-components'
import { Container, Row, Col } from '../components'
import { BORDER } from '../constants/colors'

const FooterWrapper = s.div`
  width: 100%;
  padding: 2rem 0;
  background: white;
  border-top: 1px solid ${BORDER};
`

const Logo = s.img`
  height: 2.5rem;
  width: auto;
  margin-bottom: 1rem;
`

export default () => (
  <FooterWrapper>
    <Container>
      <Row>
        <Col>
          <Logo src="/static/logo.png" alt="Skin First RX" />
        </Col>
      </Row>
      
      <p>Facebook</p>
      <p>Instagram</p>
    </Container>
  </FooterWrapper>
)
