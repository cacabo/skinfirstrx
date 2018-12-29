import {
  Title,
  Text,
  RowSpace,
  Container,
  Section,
  Preheading,
} from '../../components'
import { LIGHT_GRAY } from '../../constants/colors'

export default () => (
  <Container background={LIGHT_GRAY}>
    <Section>
      <Preheading>Testimonials</Preheading>
      <Title>Our customers love us</Title>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu leo ut est imperdiet tristique. In vulputate vel enim a suscipit. Aenean eleifend egestas venenatis. Maecenas imperdiet dui quam, at condimentum ante vehicula suscipit.</Text>
      <RowSpace />
    </Section>
  </Container>
)
