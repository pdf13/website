import { NextResponse, type NextRequest } from 'next/server'

const preferredLocale = (header: string | null) => {
  const ranked = (header ?? '')
    .split(',')
    .map(part => {
      const [tag, q] = part.trim().split(';q=')
      return { tag: tag.toLowerCase(), q: q ? Number(q) : 1 }
    })
    .sort((a, b) => b.q - a.q)
  for (const { tag } of ranked) {
    if (tag.startsWith('pt')) return 'pt'
    if (tag.startsWith('en')) return 'en'
  }
  return 'en'
}

export function proxy (request: NextRequest) {
  const locale = preferredLocale(request.headers.get('accept-language'))
  const response = NextResponse.redirect(new URL(`/${locale}`, request.url), 307)
  response.headers.set('Vary', 'Accept-Language')
  return response
}

export const config = { matcher: '/' }
