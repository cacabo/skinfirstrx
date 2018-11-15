import s from 'styled-components'

import {
  Section,
  Preheading,
  Title,
  Text,
  Row,
  Col,
  ColSpace,
} from '../../components'
import { LILAC } from '../../constants/colors'

const Placeholder = s.div`
  width: 100%;
  height: 30vh;
  background: ${LILAC};
  margin-bottom: 1rem;
`

export default () => (
  <Section>
    <Preheading>Services</Preheading>

    <Title>
      Everything to meet your needs
    </Title>

    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu leo ut est imperdiet tristique. In vulputate vel enim a suscipit. Aenean eleifend egestas venenatis. Maecenas imperdiet dui quam, at condimentum ante vehicula suscipit.
    </Text>

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
)