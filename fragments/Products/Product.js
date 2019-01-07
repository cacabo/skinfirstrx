import s from 'styled-components'

import { Text, SmallText } from '../../components'
import { BORDER } from '../../constants/colors'

const Wrapper = s.div`
  padding: 0 0.5rem;
`

const Product = s.div`
  padding: 1rem calc(1rem + 2.5%) 0.5rem calc(1rem + 2.5%);
  border: 1px solid ${BORDER};
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
  margin: 0 auto;
`

export default ({ name, retail, description, image }) => (
  <Wrapper>
    <Product>
      {image && (
        <ImageWrapper>
          <Image src={`static/products/` + image} alt={name} />
        </ImageWrapper>
      )}

      <Text right>${retail}</Text>
      <Text><strong>{name}</strong></Text>
      <SmallText>{description}</SmallText>
    </Product>
  </Wrapper>
)
