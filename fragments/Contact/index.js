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
import { LIGHT_GRAY } from '../../constants/colors'

const Image = s.img`
  width: 100%;
  height: auto;
`

export default () => (
  <Container>
    <Section>
      <Row>
        <Col>
          <Preheading>Contact Us</Preheading>

          <Title>Your best skin starts here</Title>

          <form>
            <Input name="name" type="text" label="Name" placeholder="SkinFirst Rx" />
            <Input name="email" type="email" label="Email" placeholder="me@email.com" />
            <Textarea name="body" type="text" label="Message" placeholder="..." />
            <Input name="services" type="text" label="List services interested in" placeholder="" />

            <Btn>
              Submit
            </Btn>
          </form>
        </Col>

        <ColSpace />

        <Col>
          <Image src="static/perfect-skin.png" alt="Perfect skin starts here" />
        </Col>
      </Row>
    </Section>
  </Container>
)
