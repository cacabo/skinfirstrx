import React from 'react'
import Link from 'next/link'
import s from 'styled-components'

import Layout from '../fragments/Layout/index'
import { Container, Preheading, Text, Section } from '../components'
import Contact from '../fragments/Contact/index'
import Hero from '../fragments/Hero/index'

export default () => (
  <Layout>
    <Hero />
    
    <Container>
      <Section>
        <Preheading>Free Consultation</Preheading>
      </Section>

      <Section>
        <Preheading>Services</Preheading>
      </Section>

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
      </Section>

      <Section>
        <Preheading>Contact Us</Preheading>
        <Contact />
      </Section>
    </Container>
  </Layout>
)
