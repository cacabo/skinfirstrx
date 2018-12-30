import React from 'react'
import s from 'styled-components'

import Input from './Input'
import Textarea from './Textarea'
import {
  Btn,
  Row,
  Col,
  Preheading,
  Container,
  ColSpace,
  Title,
  Section,
} from '../../components'
import { LIGHT_GRAY, WHITE, BORDER } from '../../constants/colors'
import Face from './Face'

const Wrapper = s.div`
  min-height: 100vh;
`

const FormWrapper = s.div`
  background: ${WHITE};
  border: 1px solid ${BORDER};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  box-shadow: 0px 2px 4px ${BORDER};
`

export default () => (
  <>
    <Face />
    <Container>
      <Section>
        <Row>
          <Col>
            <Wrapper>
              <Preheading>Contact Us</Preheading>

              <Title>Your best skin starts here</Title>

              <FormWrapper>
                <form>
                  <Input name="name" type="text" label="Name" placeholder="SkinFirst Rx" />
                  <Input name="email" type="email" label="Email" placeholder="me@email.com" />
                  <Textarea name="body" type="text" label="Message" placeholder="..." />
                  <Input name="services" type="text" label="List services interested in" placeholder="" />

                  <Btn>
                    Submit
                  </Btn>
                </form>
              </FormWrapper>
            </Wrapper>
          </Col>

          <Col />
        </Row>
      </Section>
    </Container>
  </>
)
