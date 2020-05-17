import React from 'react'
import Link from 'next/link'
import { string } from 'prop-types'

const LanguageSwap = props => {
  const { to } = props

  const available = {
    enUS: {
      path: '/en',
      label: 'read in english'
    },
    ptBR: {
      path: '/pt',
      label: 'leia em português'
    }
  }

  if (!available[to]) return null

  return (
    <p>
      <Link href={available[to].path}>
        <a><small>[{available[to].label}]</small></a>
      </Link>
    </p>
  )
}

LanguageSwap.propTypes = {
  to: string.isRequired
}

export default LanguageSwap
