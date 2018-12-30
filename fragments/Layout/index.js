import Head from 'next/head'
import s from 'styled-components'

import Nav from '../Nav'
import Footer from '../Footer'
import Style from './Style'
import Slick from './Slick'

const App = s.div`
  width: 100%;
  min-height: 75vh;
`

// TODO favicon

const Layout = ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1.0" />
      <meta charSet="utf-8" />

      <title>Skin First Rx</title>
      <meta name="description" content="TODO" />
      <meta name="keywords" content="TODO" />
      <meta name="author" content="Skin First RX" />

      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700" rel="stylesheet" />

      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>

    <Style />

    <Slick />

    <Nav />

    <App>
      { children }
    </App>

    <Footer />
  </div>
)

export default Layout
