import React from 'react'
import s from 'styled-components'

import {
  Row,
  Col,
  Preheading,
  Container,
  Title,
  Section,
} from '../../components'
import Face from './Face'
import Form from './Form'

const Wrapper = s.div`
  min-height: 100vh;
`

export default () => (
  <>
    <Face />
    <Container>
      <Section id="contact">
        <Row>
          <Col>
            <Wrapper>
              <Preheading>Contact Us</Preheading>

              <Title>Your best skin starts here</Title>

              <Form />
            </Wrapper>
          </Col>

          <Col />
        </Row>
      </Section>
    </Container>
  </>
)
