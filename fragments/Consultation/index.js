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
              Don't delay your healthy skin, call for a free consult today
            </Title>

            <Text>
              We offer free consults. This is a risk free way to see what we can offer and how we can help you achieve your skin goals.
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
