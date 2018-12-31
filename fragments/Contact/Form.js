import React, { Component } from 'react'
import s from 'styled-components'

import { Btn, Input, Textarea } from '../../components'
import { WHITE, BORDER } from '../../constants/colors'
import { isValidEmail } from '../../helpers'

const FormWrapper = s.div`
  background: ${WHITE};
  border: 1px solid ${BORDER};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  box-shadow: 0px 2px 4px ${BORDER};
`

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      body: '',
      services: '',
    }

    this.isDisabled = this.isDisabled.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  isDisabled() {
    const {
      name,
      email,
      body,
      services,
    } = this.state

    // Ensure all input is present
    if (!name || !email || !body || !services) {
      return true
    }

    // Ensure input is not too long
    if (
      name.length > 200
      || email.length > 200
      || body.length > 5000
      || services.length > 500
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
    console.log('SUBMITTED')
  }

  render() {
    const {
      name,
      email,
      body,
      services,
    } = this.state

    return (
      <FormWrapper>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="name"
            type="text"
            label="Name"
            placeholder=""
            value={name}
            handleChange={this.handleChange}
          />

          <Input
            name="email"
            type="email"
            label="Email"
            placeholder=""
            value={email}
            handleChange={this.handleChange}
          />

          <Textarea
            name="body"
            type="text"
            label="Message"
            placeholder=""
            value={body}
            handleChange={this.handleChange}
          />

          <Input
            name="services"
            type="text"
            label="List services interested in"
            placeholder=""
            value={services}
            handleChange={this.handleChange}
          />

          <Btn isInput disabled={this.isDisabled()}>Submit</Btn>
        </form>
      </FormWrapper>
    )
  }
}
