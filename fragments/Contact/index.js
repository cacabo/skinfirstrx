import React from 'react'
import Input from './Input'
import Textarea from './Textarea'

import { Btn, Row, Col } from '../../components'

export default () => (
  <Row>
    <Col>
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
    <Col />
  </Row>
)
