import React from 'react'

import {
  Section,
  Preheading,
  Title,
  Text,
  RowSpace,
  Container,
} from '../../components'
import { LIGHT_GRAY } from '../../constants/colors'

const content = [
  'are natural substances made by skin cells to maintain healthy skin',
  'play a pivotal role in maintaining firmness and elasticity in your skin',
  'are responsible for supporting the repair of damaged skin',
  'help reduce the appearance of fine lines, wrinkles and improve skin tone and texture',
]

const otherProducts = [
  {
    product: 'Regular use of an SPF 30 or higher Broad-spectrum sunscreen',
    impact: 'Protecting newly rejuvenated skin is essential in maintaining results',
  },
  {
    product: 'Antioxidants, such as Vitamin C',
    impact: 'Neutralize free radicals (produced by sun exposure, smoking and pollution) and provide an extra layer of protection beyond sunscreen alone',
  },
  {
    product: 'SkinMedica Total Defense + Repair',
    impact: 'Provides protection from sun exposure and free radicals',
  },
  {
    product: 'Vitamin A (Retinol)',
    impact: 'For more serious skin concerns; In combination with GFs provides a better outcome than either one alone',
  },
]

export default () => (
  <Container background={LIGHT_GRAY}>
    <Section id="services">
      <Preheading>Growth Factors</Preheading>

      <Title>
        The Science Behind Skin Rejuvenation
      </Title>

      <Text>Growth factors...</Text>

      <ul>
        {content.map(c => (
          <li key={c}>
            <Text>{c}</Text>
          </li>
        ))}
      </ul>

      <RowSpace />

      <Text>
        <strong>
          {'Cells in aging skin make less GFs than cells in youthful skin. Regular use of skin care products with a high concentration of stable GFs is one way to support skin rejuvenation'}
        </strong>
      </Text>

      <RowSpace />

      <Text>Other products to use with GFs:</Text>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Impact</th>
          </tr>
        </thead>
        <tbody>
          {otherProducts.map(({ product, impact }) => (
            <tr key={product}>
              <td>{product}</td>
              <td>{impact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  </Container>
)
