import '../styles/reset.css'
import '../styles/normalize.css'
import '../styles/base.css'
import '../styles/typography.css'

import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import Router from 'next/router'
import Head from 'next/head'

import Favicon from '../components/Favicon'

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    ReactGA.initialize('UA-165873106-1')
    ReactGA.pageview(`${window.location.pathname}${window.location.search}`)

    Router.events.on('routeChangeComplete', url => ReactGA.pageview(url))
  }, [])

  return (
    <>
      <Head>
        <title key='title'>pdf - Software Engineer</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Favicon />
      <Component {...pageProps} />
    </>
  )
}

export default App
