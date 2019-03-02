import React from 'react'
import s from 'styled-components'

import {
  Row,
  Col,
  Title,
  Text,
  RowSpace,
  Container,
  Section,
  Preheading,
  ColSpace,
} from '../../components'
import brands from './brands'
import { BLUE, WHITE, LIGHT_BLUE } from '../../constants/colors'
import { maxWidth, SM } from '../../constants/widths'

const BORDER_WIDTH = '12px'

const Image = s.img`
  width: auto;
  height: 4.5rem;
  max-width: 100%;
  display: inline-block;
  margin: 0.5rem 5%;
`

const ImageWrapper = s.div`
  width: 100%;
  display: block;
  height: auto;
  text-align: center;
`

const SpotlightImg = s.img`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  margin-top: 1rem;

  ${maxWidth(SM)} {
    margin-bottom: 1rem;
    margin-top: 0;
  }
`

const SpotlightWrapper = s.div`
  border: ${BORDER_WIDTH} solid ${({ color }) => color};
  box-sizing: border-box;
  margin: 0 2rem 2rem 2rem;
`

const Spotlight = s.div`
  margin: 1rem calc(-2rem - ${BORDER_WIDTH});
  padding: 1rem 0;
`

const ImgCol = s(Col)`
  width: 20%;
  flex: none;

  ${maxWidth(SM)} {
    width: 50%;
  }
`

const TextCol = s(Col)`
  background: ${WHITE};
  padding: 1rem 0;
`

export default () => (
  <Container>
    <Section id="providers">
      <Preheading>Our Providers</Preheading>

      <Title>
        Proven brands known around the world
      </Title>

      <Text>
        We are proud to be a provider of these global brands.
      </Text>

      <RowSpace />

      <ImageWrapper>
        {brands.map(brand => (
          <Image src={`/static/brands/${brand}`} alt={brand} key={brand} />
        ))}
      </ImageWrapper>

      <RowSpace />
      <RowSpace />
      <RowSpace />

      <SpotlightWrapper color={BLUE}>
        <Spotlight>
          <Row>
            <ImgCol>
              <SpotlightImg src="/static/emily.jpg" alt="emily" />
            </ImgCol>

            <ColSpace />

            <TextCol>
              <Title marginTop="0">
                Meet Emily
              </Title>

              <Text>
                {'Emily Simon completed her Bachelors degree in Psychology at the University of New Hampshire of 2015. Her passion to help people then led her to the Massachusetts General Hospital Institute of Health Professions, where she completed the Accelerated Bachelors of Sciences in Nursing program in 2017. As a Registered Nurse, Emily has been working in plastic surgery as both a staff and operating room nurse. She has recently completed postgraduate training for injectables at the Aesthetic Institute of Massachusetts in Waltham to supplement her newfound love for Aesthetic Nursing.'}
              </Text>
            </TextCol>
          </Row>
        </Spotlight>
      </SpotlightWrapper>

      <SpotlightWrapper color={LIGHT_BLUE}>
        <Spotlight>
          <Row>
            <ImgCol>
              <SpotlightImg src="/static/colleen.jpg" alt="emily" />
            </ImgCol>

            <ColSpace />

            <TextCol>
              <Title marginTop="0">
                ...and Colleen
              </Title>

              <Text>
                {'Colleen Catherine Barry graduated from the University of Scranton Bachelors of Sciences of Nursing program in 2015. She then went on to start her career at Cape Cod Hospital and has continued on to New England Baptist Hospital. She enjoys the specialized field of orthopedics. Colleen also has a strong passion for aesthetic nursing and has pursued training at the Aesthetic Institute of Massachusetts for injectables.'}
              </Text>
            </TextCol>
          </Row>
        </Spotlight>
      </SpotlightWrapper>
    </Section>
  </Container>
)
