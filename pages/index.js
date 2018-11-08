import React from 'react'
import Link from 'next/link'

import Layout from '../fragments/Layout/index'
import { Container, Title, Text } from '../components'
import Contact from '../fragments/Contact/index'

export default () => (
  <Layout>
    <Container>
      <ul>
        <li><Link href='/products' as='/products'><a>Products</a></Link></li>
        <li><Link href='/b' as='/b'><a>b</a></Link></li>
        <li>
          <Link
            href={{pathname: '/posts', query: { id: '2' }}}
            as='/posts/2'
          >
            <a>post #2</a>
          </Link>
        </li>
      </ul>

      <div>
        <Title>Free Consultation</Title>
      </div>

      <div>
        <Title>Services</Title>
      </div>

      <div>
        <Title>Products</Title>
      </div>

      <div>
        <Title>Our Providers</Title>
      </div>

      <div>
        <Title>Testimonials</Title>
      </div>

      <div>
        <Title>FAQ</Title>
      </div>

      <div>
        <Title>Contact Us</Title>
        <Contact />
      </div>
    </Container>
  </Layout>
)
