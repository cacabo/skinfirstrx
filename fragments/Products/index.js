import React from 'react'

import content from './content'
import Product from './Product'
import {
  Title,
  Text,
  RowSpace,
  Container,
  Section,
  Preheading,
  Slider,
} from '../../components'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export default () => (

  <Section id="products">
    <Container>
      <Preheading>Products</Preheading>

      <Title>
        Beautiful products with beautiful results
      </Title>

      <Text>
        {'Learn more about the products we have to offer. Ask about our other products when you call or visit.'}
      </Text>

      <RowSpace />
    </Container>

    <Slider settings={settings}>
      {content.map(c => (
        <Product
          key={c.name.replace(/\s+/g, '-').toLowerCase()}
          {...c}
        />
      ))}
    </Slider>
  </Section>
)
