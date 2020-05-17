/* eslint-disable react/prop-types */

import 'styles/reset.css'
import 'styles/normalize.css'
import 'styles/base.css'
import 'styles/typography.css'

import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import Router from 'next/router'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import Favicon from 'components/Favicon'
import SEOConfig from 'seo.config'

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID)
    ReactGA.pageview(`${window.location.pathname}${window.location.search}`)

    Router.events.on('routeChangeComplete', url => ReactGA.pageview(url))
  }, [])

  return (
    <>
      <DefaultSeo {...SEOConfig} />
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Favicon />
      <Component {...pageProps} />
    </>
  )
}

export function reportWebVitals (metric) {
  const { id, name, label, value } = metric

  ReactGA.event({
    eventCategory: `Next.js ${label} metric`,
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value),
    eventLabel: id,
    nonInteraction: true
  })
}

export default App
