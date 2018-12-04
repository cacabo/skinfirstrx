import content from './content'
import Product from './Product'
import { Row } from '../../components'

export default () => (
  <Row>
    {content.map((props) => (
      <Product
        {...props}
      />
    ))}
  </Row>
)
