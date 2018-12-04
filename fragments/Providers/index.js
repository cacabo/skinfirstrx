import s from 'styled-components'

import { Row, Col, Title, Text, RowSpace } from '../../components'
import content from './content'

const Image = s.img`
  width: auto;
  height: 4.5rem;
  max-width: 100%;
  display: inline-block;
`

const ImageWrapper = s.div`
  width: 100%;
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

    <Row>
      {content.map(({ name, image }) => (
        <Col key={name}>
          <ImageWrapper>
            <Image src={`static/providers/` + image} alt={name} />
          </ImageWrapper>
        </Col>
      ))}
    </Row>
  </>
)
