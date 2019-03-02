import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import s from 'styled-components'

import {
  Btn,
  Input,
  Textarea,
  SuccessMessage,
  ErrorMessage,
} from '../../components'
import { WHITE, BORDER } from '../../constants/colors'
import { isValidEmail } from '../../helpers'
import { CONTACT_PATH } from '../../constants/routes'

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
      success: false,
      error: '',
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
      pending,
    } = this.state

    // Connot resubmit while request is being sent
    if (pending) {
      return true
    }

    // Ensure all input is present
    if (!name || !email || !body || !services) {
      return true
    }

    // Ensure input is not too long
    if (
      name.length > 200
      || email.length > 200
      || body.length > 5000
      || services.length > 1000
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

    if (this.isDisabled()) {
      this.setState({
        error: 'There was an error with your input. Please check the form and try again',
      })

      return
    }

    e.preventDefault()
    this.setState({ pending: true })

    const body = JSON.stringify(Object.assign({}, this.state))
    const req = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body,
    }

    fetch(CONTACT_PATH, req)
      .then(r => r.json())
      .then(({ success = false, error = '' }) => {
        this.setState({
          success,
          error,
          pending: false,
        })
      })
      .catch((err) => {
        this.setState({
          error: err.message || 'There was an error submitting your response. Please check the form and try again.',
          pending: false,
        })
      })
  }

  render() {
    const {
      name,
      email,
      body,
      services,
      pending,
      error,
      success,
    } = this.state

    if (success) {
      return (
        <SuccessMessage message="Your contact request was sent successfully. We will get back to you as soon as possible!" />
      )
    }

    return (
      <FormWrapper>
        <form onSubmit={this.handleSubmit}>
          <ErrorMessage message={error} />

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

          <Btn isInput disabled={this.isDisabled()}>
            {pending ? 'Submitting...' : 'Submit'}
          </Btn>
        </form>
      </FormWrapper>
    )
  }
}
