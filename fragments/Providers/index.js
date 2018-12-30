import s from 'styled-components'

import { Row, Col, Title, Text, RowSpace } from '../../components'
import content from './content'
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
  <>
    <Title>
      Proven brands known around the world
    </Title>

    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu leo ut est imperdiet tristique. In vulputate vel enim a suscipit. Aenean eleifend egestas venenatis. Maecenas imperdiet dui quam, at condimentum ante vehicula suscipit.
    </Text>

    <RowSpace />

    <ImageWrapper>
      {brands.map(brand => (
        <Image src={`/static/brands/${brand}`} alt={brand} key={brand} />
      ))}
    </ImageWrapper>
  </>
)

// {content.map(({ name, image }) => (
//   <Col key={name}>
//     <ImageWrapper>
//       <Image src={`static/providers/` + image} alt={name} />
//     </ImageWrapper>
//   </Col>
// ))}
