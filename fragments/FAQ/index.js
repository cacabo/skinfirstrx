import { Text } from '../../components'
import content from './content'

export default () => (
  <>
    <Text>Have a question? Take a look at the ones we often get below.</Text>
    {content.map(({ title, body }) => (
      <div key={title}>
        <Text><strong>{title}</strong></Text>
        <Text>{body}</Text>
      </div>
    ))}
  </>
)
