import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import s from 'styled-components'

import { WHITE, BLUE, DARK_BLUE } from '../../constants/colors'
import Nav from '../Nav'
import Footer from '../Footer'

const App = s.div`
  width: 100%;
  min-height: 75vh;
`

const Wrapper = s.div`
  .slick-dots {
    width: 100%;
    transform: translateY(1rem);
    z-index: 1;
  }

  .slick-arrow {
    display: none;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }

  a {
    cursor: hand !important;
    text-decoration: none !important;
    color: ${BLUE};
  }

  a:hover,
  a:focus,
  a:active {
    color: ${DARK_BLUE};
  }

  a:visited {
    color: ${BLUE};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  p,
  li,
  a,
  button {
    font-family: 'Montserrat', sans-serif;
  }
`

const Layout = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1.0" />
      <meta charSet="utf-8" />

      <title>Skin First Rx</title>
      <meta name="description" content="TODO" />
      <meta name="keywords" content="TODO" />
      <meta name="author" content="Skin First RX" />

      <link rel="stylesheet" href="/static/style.css" />

      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700" rel="stylesheet" />

      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content={WHITE} />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content={WHITE} />
    </Head>
    <Wrapper>
      <Nav />

      <App>
        { children }
      </App>

      <Footer />
    </Wrapper>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
