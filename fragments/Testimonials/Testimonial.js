import s from 'styled-components'

import { Text } from '../../components'
import { WHITE, BORDER } from '../../constants/colors'
import Stars from './Stars'

const Testimonial = s.div`
  background: ${WHITE};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid ${BORDER};
  box-shadow: 0 2px 4px ${BORDER};
`

export default ({ name, stars, text, image }) => (
  <Testimonial key={`review-${name}`}>
    <Text><strong>{name}</strong></Text>
    <Text><Stars stars={stars} /> {stars}/5</Text>
    <Text>"{text}"</Text>
  </Testimonial>
)
