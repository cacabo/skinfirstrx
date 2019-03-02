import React from 'react'

import {
  Section,
  Preheading,
  Title,
  Text,
  Container,
} from '../../components'
import { LIGHT_GRAY } from '../../constants/colors'

const content = [
  'are natural substances made by skin cells to maintain healthy skin',
  'play a pivotal role in maintaining firmness and elasticity in your skin',
  'are responsible for supporting the repair of damaged skin',
  'help reduce the appearance of fine lines, wrinkles and improve skin tone and texture',
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
        {content.map(c => <li key={c}>{c}</li>)}
      </ul>

      <Text>
        {'Cells in aging skin make less GFs than cells in youthful skin. Regular use of skin care products with a high concentration of stable GFs is one way to support skin rejuvenation'}
      </Text>
    </Section>
  </Container>
)
