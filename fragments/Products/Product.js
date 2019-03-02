import React from 'react'
import s from 'styled-components'
import PropTypes from 'prop-types'

import { Text, SmallText } from '../../components'
import { BORDER } from '../../constants/colors'

const Wrapper = s.div`
  padding: 0 0.5rem;
`

const ProductDiv = s.div`
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
  height: 8rem;
  max-width: 100%;
  display: inline-block;
  text-align: center;
  margin: 0 auto;
`

const Product = ({
  name,
  retail,
  description,
  image,
}) => (
  <Wrapper>
    <ProductDiv>
      {image && (
        <ImageWrapper>
          <Image src={`static/products/${image}`} alt={name} />
        </ImageWrapper>
      )}

      <Text right>
        $
        {retail}
      </Text>
      <Text><strong>{name}</strong></Text>
      <SmallText>{description}</SmallText>
    </ProductDiv>
  </Wrapper>
)

Product.defaultProps = {
  image: null,
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  retail: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default Product
