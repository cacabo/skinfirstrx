import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

import {
  Input,
  Textarea,
  Row,
  Col,
  ColSpace,
  Btn,
} from '../../components'
import { isValidEmail } from '../../helpers'

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      phone: '',
      zip: '',
      body: '',
    }

    this.isDisabled = this.isDisabled.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  isDisabled() {
    const {
      name,
      email,
      phone,
      zip,
      body,
    } = this.state

    // Ensure all input is present
    if (!name || !email || !phone || !zip || !body) {
      return true
    }

    // Ensure input is not too long
    if (
      name.length > 200
      || email.length > 200
      || phone.length > 20
      || zip.length != 5
      || body.length > 5000
    ) {
      return true
    }

    if (!isValidEmail(email)) {
      return true
    }

    return false
  }

  handleChange(e) {
    if (!e) return
    const { name, value } = e.target
    if (!name) return

    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    if (!e) return
    else if (this.isDisabled()) return

    e.preventDefault()

    const req = {
      method: 'POST',
      body: this.state,
    }

    console.log(req)

    fetch('/contact', req)
      .then(r => r.json())
      .then(data => {
        console.log(data);
      })
  }

  render() {
    const {
      name,
      email,
      phone,
      zip,
      body,
    } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <Row>
          <Col>
            <Input
              name="name"
              type="text"
              label="Name"
              placeholder=""
              value={name}
              handleChange={this.handleChange}
            />
          </Col>
          <ColSpace width="1rem" />
          <Col>
            <Input
              name="email"
              type="email"
              label="Email"
              placeholder="me@email.com"
              value={email}
              handleChange={this.handleChange}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Input
              name="phone"
              type="tel"
              label="Phone"
              placeholder="(781)123-4567"
              value={phone}
              handleChange={this.handleChange}
            />
          </Col>
          <ColSpace width="1rem" />
          <Col>
            <Input
              name="zip"
              type="number"
              label="Zip Code"
              placeholder="02482"
              value={zip}
              handleChange={this.handleChange}
            />
          </Col>
        </Row>

        <Textarea
          name="body"
          type="text"
          label="Comments/Questions"
          placeholder="..."
          value={body}
          handleChange={this.handleChange}
        />

        <Btn isInput disabled={this.isDisabled()}>Schedule</Btn>
      </form>
    )
  }
}
