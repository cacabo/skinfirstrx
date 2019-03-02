import React from 'react'
import s from 'styled-components'

import {
  Container,
  Row,
  Col,
  Text,
  ColSpace,
} from '../components'
import { BORDER } from '../constants/colors'
import { maxWidth, SM } from '../constants/widths'

const FooterWrapper = s.div`
  width: 100%;
  padding: 2rem 0 1rem 0;
  background: white;
  border-top: 1px solid ${BORDER};
  font-size: 80%;
`

const Logo = s.img`
  height: 2.5rem;
  width: auto;
  display: inline-block;
`

const Icon = s.img`
  height: 1.25rem;
  width: auto;
  margin-right: 1rem;
  opacity: 0.25;

  &:hover {
    opacity: 0.375;
  }
`

const Links = s.div`
  display: inline-block;
`

const Copyright = s(Text)`
  width: 100%;
  text-align: center;
  opacity: 0.5;
  margin-top: 1rem;
  margin-bottom: 0;
  font-size: 80%;

  ${maxWidth(SM)} {
    margin-top: 2rem;
  }
`

const Header = s(Text)`
  font-weight: bold;
  margin-top: 0;

  ${maxWidth(SM)} {
    margin-top: 2rem;
  }
`

export default () => (
  <FooterWrapper>
    <Container>
      <Row>
        <Col>
          <Logo src="/static/logo.png" alt="Skin First RX" />
        </Col>

        <ColSpace width="1rem" />

        <Col>
          <Header>Contact</Header>
          <Text>
            <a href="tel:9786350107">
              (978) 635-0107
            </a>
          </Text>
          <Text>
            <a href="mailto:SkinFirstRxWellesley@gmail.com">
              SkinFirstRxWellesley@gmail.com
            </a>
          </Text>
          <Text>
            79 Central Street
            <br />
            Lower Level of Beauty and Main
            <br />
            Wellesley, MA 02482
          </Text>
        </Col>

        <ColSpace width="1rem" />

        <Col>
          <Header>Social</Header>
          <Links>
            <a href="https://www.facebook.com/SkinFirstRx">
              <Icon src="/static/icons/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://instagram.com">
              <Icon src="/static/icons/instagram.svg" alt="Instagram" />
            </a>
          </Links>
        </Col>
      </Row>

      <Row>
        <Copyright>
          &copy; 2018 Skin First Rx. All Rights Reserved.
        </Copyright>
      </Row>
    </Container>
  </FooterWrapper>
)
