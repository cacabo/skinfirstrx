import s from 'styled-components'

import {
  Row,
  Col,
  Title,
  Text,
  RowSpace,
  Container,
  Section,
  Preheading,
} from '../../components'
import brands from './brands'

const Image = s.img`
  width: auto;
  height: 4.5rem;
  max-width: 100%;
  display: inline-block;
  margin: 0.5rem 5%;
`

const ImageWrapper = s.div`
  width: 100%;
  display: block;
  height: auto;
  text-align: center;
`

export default () => (
  <Container>
    <Section id="providers">
      <Preheading>Our Providers</Preheading>

      <Title>
        Proven brands known around the world
      </Title>

      <Text>
        We are proud to be a provider of these global brands.
      </Text>

      <RowSpace />

      <ImageWrapper>
        {brands.map(brand => (
          <Image src={`/static/brands/${brand}`} alt={brand} key={brand} />
        ))}
      </ImageWrapper>
    </Section>
  </Container>
)
