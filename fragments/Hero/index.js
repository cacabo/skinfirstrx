import s from 'styled-components'

import {
  Preheading,
  Container,
  Section,
  Title,
  Text,
  Btn,
  Row,
  Col,
} from '../../components'
import { SEAFOAM } from '../../constants/colors'

const Image = s.div`
  flex: 1;
  background-image: url(static/woman.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export default ({ handleClick }) => (
  <Row>
    <Col>
      <Container background={SEAFOAM} leftOnly>
        <Section>
          <Preheading>
            Skin First RX
          </Preheading>

          <Title>
            Own your skin, not the other way around
          </Title>
          <Text>
            Let SkinFirstRx help you put your skin first. Our professional aesthetic nurses can provide expert consultation. We will work with you on a personalized plan for your skin care needs. We use our professional products to help delay and reverse signs of aging. Our products are based in science and trusted by millions to help keep their skin healthy, smooth and resilient.
          </Text>
          <Btn handleClick={handleClick}>
            Get Started
          </Btn>
        </Section>
      </Container>
    </Col>
    <Image />
  </Row>
)
