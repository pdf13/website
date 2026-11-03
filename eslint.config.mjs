import next from 'eslint-config-next'
import neostandard from 'neostandard'

const config = [
  { ignores: ['.next/', '.remember/', '.hallmark/', 'next-env.d.ts'] },
  ...neostandard({ ts: true, noJsx: true }),
  ...next
]

export default config
