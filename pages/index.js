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
import Products from '../fragments/Products/index'
import FAQ from '../fragments/FAQ/index'
import Consultation from '../fragments/Consultation/index'
import Services from '../fragments/Services/index'
import Providers from '../fragments/Providers/index'
import Testimonials from '../fragments/Testimonials/index'

export default () => (
  <Layout>
    <Hero />

    <Container>
      <Consultation />
    </Container>

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
