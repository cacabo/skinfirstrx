import s from 'styled-components'

import { Col, Text } from '../../components'
import { BORDER } from '../../constants/colors'

const Product = s.div`
  padding: 1rem;
  border: 1px solid ${BORDER};
  margin-bottom: 1.5rem;
  box-shadow: 0px 1px 4px ${BORDER};
  border-radius: 4px;
  flex: 1;
`

const ImageWrapper = s.div`
  width: 100%;
  text-align: center;
`

const Image = s.img`
  height: 4rem;
  max-width: 100%;
  height: auto;
  display: inline-block;
  text-align: center;
`

export default ({ name, retail, description, image }) => (
  <Col width="calc(50% - 0.75rem)" flex>
    <Product>
      {image && (
        <ImageWrapper>
          <Image src={`static/products/` + image} alt={name} />
        </ImageWrapper>
      )}

      <Text right>${retail}</Text>
      <Text><strong>{name}</strong></Text>
      <Text>{description}</Text>
    </Product>
  </Col>
)
