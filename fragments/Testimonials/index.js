import s from 'styled-components'

import {
  Title,
  Text,
  RowSpace,
  Container,
  Section,
  Preheading,
  Slider,
} from '../../components'
import { LIGHT_GRAY } from '../../constants/colors'
import reviews from './reviews'
import Testimonial from './Testimonial'

const Wrapper = s.div`
  background: ${LIGHT_GRAY};
  display: block;
  width: 100%;
`

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
}

export default () => (
  <Wrapper>
    <Section id="testimonials">
      <Container>
        <Preheading>Testimonials</Preheading>
        <Title>Our customers love us</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu leo ut est imperdiet tristique. In vulputate vel enim a suscipit. Aenean eleifend egestas venenatis. Maecenas imperdiet dui quam, at condimentum ante vehicula suscipit.</Text>

        <RowSpace />
      </Container>

      <Slider settings={settings}>
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
  </Wrapper>
)
