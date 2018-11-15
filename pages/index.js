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

export default () => (
  <Layout>
    <Hero />

    <Container>
      <Consultation />

      <Section>
        <Preheading>Services</Preheading>

        <Title>
          Everything to meet your needs
        </Title>

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu leo ut est imperdiet tristique. In vulputate vel enim a suscipit. Aenean eleifend egestas venenatis. Maecenas imperdiet dui quam, at condimentum ante vehicula suscipit.
        </Text>
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
        <FAQ />
      </Section>

      <Section>
        <Preheading>Contact Us</Preheading>
        <Contact />
      </Section>
    </Container>
  </Layout>
)
