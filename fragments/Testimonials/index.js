import Slider from 'react-slick'

import {
  Title,
  Text,
  RowSpace,
  Container,
  Section,
  Preheading,
} from '../../components'
import { LIGHT_GRAY } from '../../constants/colors'
import reviews from './reviews'
import Testimonial from './Testimonial'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

export default () => (
  <Container background={LIGHT_GRAY}>
    <Section>
      <Preheading>Testimonials</Preheading>
      <Title>Our customers love us</Title>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu leo ut est imperdiet tristique. In vulputate vel enim a suscipit. Aenean eleifend egestas venenatis. Maecenas imperdiet dui quam, at condimentum ante vehicula suscipit.</Text>

      <RowSpace />
      <RowSpace />
      <RowSpace />

      <Slider {...settings}>
        {reviews.map(({ name, image, text, stars }) => (
          <Testimonial
            name={name}
            image={image}
            text={text}
            stars={stars}
            key={`testimonial-${name}`}
          />
        ))}
      </Slider>
    </Section>
  </Container>
)
