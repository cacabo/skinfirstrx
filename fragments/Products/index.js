import s from 'styled-components'

import content from './content'
import Product from './Product'
import {
  Row,
  Title,
  Text,
  RowSpace,
  Container,
  Section,
  Preheading,
  Slider,
} from '../../components'
import { SM, MD, LG } from '../../constants/widths'

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
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

export default () => (

  <Section id="products">
    <Container>
      <Preheading>Products</Preheading>

      <Title>
        Beautiful products with beautiful results
      </Title>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu leo ut est imperdiet tristique. In vulputate vel enim a suscipit. Aenean eleifend egestas venenatis. Maecenas imperdiet dui quam, at condimentum ante vehicula suscipit.
      </Text>

      <RowSpace />
    </Container>

    <Slider settings={settings}>
      {content.map(props => (
        <Product
          key={props.name}
          {...props}
        />
      ))}
    </Slider>
  </Section>
)
