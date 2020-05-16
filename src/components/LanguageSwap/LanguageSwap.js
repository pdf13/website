import React from 'react'
import Link from 'next/link'

const LanguageSwap = props => {
  const { to } = props

  const available = {
    enUS: {
      path: '/en-us',
      label: 'read in english'
    },
    ptBR: {
      path: '/pt-br',
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

export default LanguageSwap
