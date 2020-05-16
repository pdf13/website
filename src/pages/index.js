import { useEffect } from 'react'
import { lookup } from 'accept-language-negotiator'
import Router from 'next/router'

const Index = () => {
  useEffect(() => {
    const supportedLang = ['pt', 'en']
    const defaultLang = 'en'
    const lang = lookup(navigator.languages.join('-'), supportedLang, defaultLang)
    Router.push(`/${lang.toLowerCase()}`)
  }, [Router])

  return null
}

export default Index
