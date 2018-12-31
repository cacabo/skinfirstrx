import s from 'styled-components'

import {
  Section,
  Preheading,
  Title,
  Text,
  Row,
  Col,
  ColSpace,
  RowSpace,
  Container,
} from '../../components'
import { LILAC, LIGHT_GRAY } from '../../constants/colors'

const Placeholder = s.div`
  width: 100%;
  height: 30vh;
  background: ${LILAC};
  margin-bottom: 1rem;
`

export default () => (
  <Container background={LIGHT_GRAY}>
    <Section id="services">
      <Preheading>Services</Preheading>

      <Title>
        Everything to meet your needs
      </Title>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu leo ut est imperdiet tristique. In vulputate vel enim a suscipit. Aenean eleifend egestas venenatis. Maecenas imperdiet dui quam, at condimentum ante vehicula suscipit.
      </Text>

      <RowSpace />

      <Row>
        <Col>
          <Placeholder />
        </Col>
        <ColSpace width="2rem" />
        <Col>
          <Placeholder />
        </Col>
        <ColSpace width="2rem" />
        <Col>
          <Placeholder />
        </Col>
      </Row>
    </Section>
  </Container>
)
