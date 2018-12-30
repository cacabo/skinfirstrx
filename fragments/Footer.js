import s from 'styled-components'
import { Container, Row, Col, Text } from '../components'
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

const Icon = s.img`
  height: 1.5rem;
  width: auto;
  margin-right: 1rem;
`

const Links = s.div`
  margin-top: 0.5rem;
  text-align: right;
`

export default () => (
  <FooterWrapper>
    <Container>
      <Row>
        <Col>
          <Logo src="/static/logo.png" alt="Skin First RX" />
        </Col>

        <Col>
          <Links>
            <a href="https://www.facebook.com/SkinFirstRx">
              <Icon src="/static/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://instagram.com">
              <Icon src="/static/instagram.svg" alt="Instagram" />
            </a>
          </Links>
        </Col>
      </Row>

      <Row>
        <Col>
          <Text>
            <strong>Phone:</strong><br />
            <a href="tel:978-635-0107">
              978-635-0107
            </a>
          </Text>
          <Text>
            <strong>Email:</strong><br />
            <a href="mailto:SkinFirstRxWellesley@gmail.com">
              SkinFirstRxWellesley@gmail.com
            </a>
          </Text>
          <Text>
            <strong>Address:</strong><br />
            79 Central Street @ Lower Level of Beauty and Main<br />
            Wellesley, MA 02482
          </Text>
        </Col>
      </Row>
    </Container>
  </FooterWrapper>
)
