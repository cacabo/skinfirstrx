import content from './content'
import Product from './Product'
import { Row, Title, Text, RowSpace } from '../../components'

export default () => (
  <>
    <Title>
      Beautiful products with beautiful results
    </Title>

    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu leo ut est imperdiet tristique. In vulputate vel enim a suscipit. Aenean eleifend egestas venenatis. Maecenas imperdiet dui quam, at condimentum ante vehicula suscipit.
    </Text>

    <RowSpace />

    <Row>
      {content.map((props) => (
        <Product
          key={props.name}
          {...props}
        />
      ))}
    </Row>
  </>
)
