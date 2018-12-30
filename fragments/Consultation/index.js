import Link from 'next/link'
import s from 'styled-components'

import {
  Row,
  Col,
  Title,
  Preheading,
  Text,
  Btn,
  Section,
  ColSpace,
  Container,
} from '../../components'
import { LILAC } from '../../constants/colors'
import { maxWidth, SM } from '../../constants/widths'

const Placeholder = s.div`
  width: 100%;
  height: 60vh;
  background: ${LILAC};
`

const Face = s.img`
  position: absolute;
  z-index: -1;
  max-width: 75%;
  max-height: 100vh;

  ${maxWidth(SM)} {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH";
    width: 100%;
    max-width: none;
    max-height: none;
    height: 100%:
  }
`

export default () => (
  <>
    <Face src="/static/face.png" />

    <Container>
      <Section>
        <Row>
          <Col>
            {/* <Placeholder /> */}
          </Col>

          <ColSpace />

          <Col>
            <Preheading>Free Consultation</Preheading>

            <Title>
              Leave your fears behind with a free consultation
            </Title>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu leo ut est imperdiet tristique. In vulputate vel enim a suscipit. Aenean eleifend egestas venenatis. Maecenas imperdiet dui quam, at condimentum ante vehicula suscipit.
            </Text>

            <Btn>
              Get Started
            </Btn>

            <Link href="/">
              <a>
                Learn More
              </a>
            </Link>
          </Col>
        </Row>
      </Section>
    </Container>
  </>
)
