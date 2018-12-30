import React, { Component } from 'react'
import Link from 'next/link'
import s from 'styled-components'

import Layout from '../fragments/Layout/index'
import {
  Container,
  Btn,
  Preheading,
  Text,
  Section,
  Row,
  Col,
  Title,
} from '../components'
import ConsultationModal from '../fragments/ConsultationModal/index'
import Contact from '../fragments/Contact/index'
import Hero from '../fragments/Hero/index'
import Products from '../fragments/Products/index'
import FAQ from '../fragments/FAQ/index'
import Consultation from '../fragments/Consultation/index'
import Services from '../fragments/Services/index'
import Providers from '../fragments/Providers/index'
import Testimonials from '../fragments/Testimonials/index'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = { active: false }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { active } = this.state

    this.setState({ active: !active })
  }

  render() {
    const { active } = this.state

    return (
      <Layout>
        <ConsultationModal show={active} toggle={this.handleClick} />

        <Hero handleClick={this.handleClick} />

        <Consultation handleClick={this.handleClick} />

        <Services />

        <Container>
          <Section>
            <Preheading>Products</Preheading>
            <Products />
          </Section>
        </Container>

        <Testimonials />

        <Container>
          <Section>
            <Preheading>Our Providers</Preheading>
            <Providers />
          </Section>
        </Container>

        <FAQ />

        <Contact />
      </Layout>
    )
  }
}
