import s from 'styled-components'

import { Text } from '../../components'
import { BORDER } from '../../constants/colors'
import content from './content'

const Question = s.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${BORDER};
`

export default () => (
  <>
    <Text>Have a question? Take a look at the ones we often get below.</Text>

    {content.map(({ title, body }) => (
      <Question key={title}>
        <Text><strong><i>{title}</i></strong></Text>
        <Text>{body}</Text>
      </Question>
    ))}
  </>
)
