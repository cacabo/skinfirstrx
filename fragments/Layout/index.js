import Head from 'next/head'
import s from 'styled-components'

import Nav from '../Nav'
import Footer from '../Footer'
import Style from './Style'

const App = s.div`
  width: 100%;
  min-height: 75vh;
`

const Layout = ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1.0" />
      <meta charSet="utf-8" />

      <meta name="description" content="TODO">
      <meta name="keywords" content="TODO">
      <meta name="author" content="Skin First RX">

      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700" rel="stylesheet" />
    </Head>

    <Style />

    <Nav />

    <App>
      { children }
    </App>

    <Footer />
  </div>
)

export default Layout
