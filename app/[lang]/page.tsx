import Link from 'next/link'
import Logo from '@/components/Logo'
import Social, { socialUrls } from '@/components/Social'
import ThemeToggle from '@/components/ThemeToggle'
import { dictionary, isLocale, siteUrl, yearsOfExperience } from '@/lib/i18n'
import English from '@/content/en.mdx'
import Portuguese from '@/content/pt.mdx'

export const revalidate = 86400

export default async function Page ({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params
  const lang = isLocale(raw) ? raw : 'en'
  const t = dictionary[lang]
  const Content = lang === 'pt' ? Portuguese : English

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pedro Dias Fonseca',
    alternateName: 'pdf',
    url: `${siteUrl}/${lang}`,
    image: `${siteUrl}/img/avatar.jpg`,
    jobTitle: t.jobTitle,
    worksFor: { '@type': 'Organization', name: 'Nubank', url: 'https://nubank.com.br' },
    knowsAbout: ['Clojure', 'Datomic', 'Kafka', 'AWS', 'Pix', 'Bre-B', 'Instant payments', 'Cybersecurity'],
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Universidade Federal de Minas Gerais' },
      { '@type': 'CollegeOrUniversity', name: 'PUC Minas' }
    ],
    address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
    sameAs: socialUrls
  }

  return (
    <div className='layout'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }}
      />
      <aside className='sidebar'>
        <Link href={`/${lang}`} className='home' aria-label={t.home}>
          <Logo className='logo' />
        </Link>
        <h1>{t.name}</h1>
        <Social label={t.social} />
        <nav className='controls'>
          <a href={`/${t.other}`} hrefLang={t.otherHrefLang}>{t.otherLabel}</a>
          <ThemeToggle toDark={t.toDark} toLight={t.toLight} />
        </nav>
      </aside>
      <main className='content'>
        <p className='lede'>{t.lede}</p>
        <article className='prose'>
          <Content years={yearsOfExperience()} />
        </article>
      </main>
    </div>
  )
}
