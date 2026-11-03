import type { Metadata, Viewport } from 'next'
import { Mulish, Ovo } from 'next/font/google'
import Link from 'next/link'
import type { ReactNode } from 'react'
import '../site.css'
import Logo from '@/components/Logo'
import Mark from '@/components/Mark'
import Social from '@/components/Social'
import ThemeToggle from '@/components/ThemeToggle'
import { dictionary, isLocale, locales, siteUrl, type Locale } from '@/lib/i18n'

const ovo = Ovo({ weight: '400', subsets: ['latin'], variable: '--font-ovo' })
const mulish = Mulish({ weight: ['400', '600'], subsets: ['latin'], variable: '--font-mulish' })

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
    { media: '(prefers-color-scheme: light)', color: '#f5f2ea' },
    { media: '(prefers-color-scheme: dark)', color: '#3c414e' }
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
    <html lang={t.htmlLang} className={`${ovo.variable} ${mulish.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
      </head>
      <body>
        <header className='site-nav column'>
          <Link href={`/${lang}`} className='home' aria-label={t.home}>
            <Mark />
          </Link>
          <nav className='nav-actions'>
            <a href={`/${t.other}`} hrefLang={t.otherHrefLang}>{t.otherLabel}</a>
            <ThemeToggle toDark={t.toDark} toLight={t.toLight} />
          </nav>
        </header>
        {children}
        <footer className='site-footer column'>
          <Logo className='footer-logo' />
          <Social label={t.social} />
        </footer>
      </body>
    </html>
  )
}
