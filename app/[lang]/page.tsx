import Logo from '@/components/Logo'
import Social, { socialUrls } from '@/components/Social'
import { dictionary, isLocale, siteUrl } from '@/lib/i18n'
import English from '@/content/en.mdx'
import Portuguese from '@/content/pt.mdx'

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
    worksFor: { '@type': 'Organization', name: 'Loggi', url: 'https://www.loggi.com' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidade Federal de Minas Gerais' },
    address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
    sameAs: socialUrls
  }

  return (
    <main className='column'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }}
      />
      <section className='hero'>
        <Logo className='hero-logo' />
        <h1>{t.name}</h1>
        <p className='lead'>{t.lede}</p>
        <Social label={t.social} />
      </section>
      <article className='prose'>
        <Content />
      </article>
    </main>
  )
}
