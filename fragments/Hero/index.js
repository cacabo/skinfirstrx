import s from 'styled-components'

import { Container, Section, Title } from '../../components'


// background: #C8F8F2;

const HeroWrapper = s.div`
  background: #C8F8F2;
`

export default () => (
  <HeroWrapper>
    <Container>
      <Section>
        <Title>
          This is the hero
        </Title>
      </Section>
    </Container>
  </HeroWrapper>
)
