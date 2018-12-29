import s from 'styled-components'

import {
  Text,
  Title,
  Preheading,
  Section,
  Container,
  RowSpace,
} from '../../components'
import { GRAY, LIGHT_GRAY, WHITE } from '../../constants/colors'
import { SM, maxWidth } from '../../constants/widths'
import content from './content'
import Question from './Question'

const QuestionsWrapper = s.div`
  display: block;
  width: 100%;
  border-left: 1px solid ${GRAY};
  border-right: 1px solid ${GRAY};
  border-bottom: 1px solid ${GRAY};
`

export default () => (
  <Container background={LIGHT_GRAY}>
    <Section>
      <Preheading>FAQ</Preheading>

      <Title>Have a question?</Title>

      <Text>Take a look at the ones we often get below. Still have a question? Contact us and we'll be quick to reply.</Text>

      <RowSpace />

      <QuestionsWrapper>
        {content.map(({ title, body }) => (
          <Question
            key={`faq-${title}`}
            title={title}
            body={body}
          />
        ))}
      </QuestionsWrapper>

      <RowSpace />
    </Section>
  </Container>
)
