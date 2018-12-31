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
            Personalized, state-of-the-art skin treatment plans curated by skincare professionals
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
