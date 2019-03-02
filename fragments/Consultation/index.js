import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

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
import Face from './Face'

const Consultation = ({ handleClick }) => (
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
              {'Don\'t delay your healthy skin, call for a free consult today'}
            </Title>

            <Text>
              {'We offer free consults. This is a risk free way to see what we can offer and how we can help you achieve your skin goals.'}
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

Consultation.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default Consultation
