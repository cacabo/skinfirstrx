import { Container, Btn } from '../components'

import Layout from '../fragments/Layout/index'
import Products from '../fragments/Products/index'

export default () => (
  <Layout>
    <Container>
      <p>Products</p>

      <Products />

      <Btn href="/">
        Back to home
      </Btn>
    </Container>
  </Layout>
)
