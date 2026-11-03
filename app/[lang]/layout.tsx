import type { Metadata, Viewport } from 'next'
import { Instrument_Sans as InstrumentSans, Mulish, Newsreader } from 'next/font/google'
import type { ReactNode } from 'react'
import '../site.css'
import { dictionary, isLocale, locales, siteUrl, type Locale } from '@/lib/i18n'

const newsreader = Newsreader({ subsets: ['latin'], axes: ['opsz'], variable: '--font-newsreader' })
const instrument = InstrumentSans({ weight: '400', subsets: ['latin'], variable: '--font-instrument' })
const mulish = Mulish({ weight: '400', subsets: ['latin'], variable: '--font-mulish' })

const modeScript = `try{var m=localStorage.getItem('mode');document.documentElement.dataset.mode=m==='dark'||m==='light'?m:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}catch(e){document.documentElement.dataset.mode=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}`

type Params = { params: Promise<{ lang: string }> }

const resolve = async (params: Params['params']): Promise<Locale> => {
  const { lang } = await params
  return isLocale(lang) ? lang : 'en'
}

export const dynamicParams = false

export function generateStaticParams () {
  return locales.map(lang => ({ lang }))
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f4f0' },
    { media: '(prefers-color-scheme: dark)', color: '#20243f' }
  ]
}

export async function generateMetadata ({ params }: Params): Promise<Metadata> {
  const lang = await resolve(params)
  const t = dictionary[lang]
  const title = 'pdf / Software Engineer'

  return {
    metadataBase: new URL(siteUrl),
    title,
    description: t.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { en: '/en', 'pt-BR': '/pt', 'x-default': '/' }
    },
    openGraph: {
      title,
      description: t.ogDescription,
      url: `/${lang}`,
      type: 'profile',
      locale: t.ogLocale,
      alternateLocale: dictionary[t.other].ogLocale,
      firstName: 'Pedro',
      lastName: 'Fonseca',
      username: 'pedrodiasfonseca',
      gender: 'male',
      images: [{ url: '/img/avatar.jpg', width: 437, height: 437, alt: 'Profile Photo' }]
    },
    twitter: { card: 'summary' }
  }
}

export default async function Layout ({ children, params }: Params & { children: ReactNode }) {
  const lang = await resolve(params)
  const t = dictionary[lang]

  return (
    <html lang={t.htmlLang} className={`${newsreader.variable} ${instrument.variable} ${mulish.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
