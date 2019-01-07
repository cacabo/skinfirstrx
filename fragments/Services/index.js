import s from 'styled-components'

import {
  Section,
  Preheading,
  Title,
  Text,
  Row,
  Col,
  ColSpace,
  RowSpace,
  Container,
} from '../../components'
import { LILAC, LIGHT_GRAY, BLUE } from '../../constants/colors'

const Results = s.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  border: 8px solid ${BLUE};
  border-radius: 4px;
`

const ResultsImg = s.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 50%;
  display: inline-block;
  height: auto;
  padding-top: 45%;
  ${({ bg }) => `
    background-image: url(${bg});
  `}
`

export default () => (
  <Container background={LIGHT_GRAY}>
    <Section id="services">
      <Preheading>Services</Preheading>

      <Title>
        What we offer
      </Title>

      <RowSpace />

      <Row>
        <Col>
          <Results>
            <ResultsImg bg="/static/results/susan-before.png" />
            <ResultsImg bg="/static/results/susan-after.png" />
          </Results>
          <Text>
            <strong>Neurotoxins:</strong> &nbsp;<i>Botox, Dyport Xeomin</i>
          </Text>
          <Text>
            Used for treatment of moderate to severe forehead lines, crow’s feet, and frown lines between the eyebrows in adults over 18. Botox softens the appearance of wrinkles causing smoother looking skin.
          </Text>
        </Col>
        <ColSpace width="2rem" />
        <Col>
          <Results>
            <ResultsImg bg="/static/results/catherine-before.png" />
            <ResultsImg bg="/static/results/catherine-after.png" />
          </Results>
          <Text>
            <strong>Dermal fillers:</strong> &nbsp;<i>Juvéderm</i>
          </Text>
          <Text>
            Fillers give lift and restore volume in the cheeks, lips and chin. Fillers can be used to help smooth wrinkles in the folds around your mouth and nose.
          </Text>
        </Col>
      </Row>
    </Section>
  </Container>
)
