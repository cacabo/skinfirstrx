import Link from 'next/link'
import s from 'styled-components'

import {
  Row,
  Col,
  Title,
  Preheading,
  Text,
  Btn,
  Section,
  ColSpace,
  Container,
} from '../../components'
import { LILAC } from '../../constants/colors'
import Face from './Face'

const Placeholder = s.div`
  width: 100%;
  height: 60vh;
  background: ${LILAC};
`

export default ({ handleClick }) => (
  <>
    <Face />

    <Container>
      <Section id="consultation">
        <Row>
          <Col>
            {/* <Placeholder /> */}
          </Col>

          <ColSpace />

          <Col>
            <Preheading>Free Consultation</Preheading>

            <Title>
              Leave your fears behind with a free consultation
            </Title>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu leo ut est imperdiet tristique. In vulputate vel enim a suscipit. Aenean eleifend egestas venenatis. Maecenas imperdiet dui quam, at condimentum ante vehicula suscipit.
            </Text>

            <Btn handleClick={handleClick}>
              Get Started
            </Btn>

            <Link href="#services">
              <a>
                Learn More
              </a>
            </Link>
          </Col>
        </Row>
      </Section>
    </Container>
  </>
)
