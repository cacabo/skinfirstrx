import React from 'react'
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
import Contact from '../fragments/Contact/index'
import Hero from '../fragments/Hero/index'
import FAQ from '../fragments/FAQ/index'
import Consultation from '../fragments/Consultation/index'
import Services from '../fragments/Services/index'

export default () => (
  <Layout>
    <Hero />

    <Container>
      <Consultation />

      <Services />

      <Section>
        <Preheading>Products</Preheading>
      </Section>

      <Section>
        <Preheading>Our Providers</Preheading>
      </Section>

      <Section>
        <Preheading>Testimonials</Preheading>
      </Section>

      <Section>
        <Preheading>FAQ</Preheading>
        <FAQ />
      </Section>

      <Section>
        <Preheading>Contact Us</Preheading>
        <Contact />
      </Section>
    </Container>
  </Layout>
)
