export const locales = ['en', 'pt'] as const
export type Locale = (typeof locales)[number]

export const siteUrl = 'https://pdf.engineer'

const firstYearWritingCode = 2013

export const yearsOfExperience = () => new Date().getFullYear() - firstYearWritingCode

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value)

export const dictionary = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    other: 'pt' as Locale,
    otherHrefLang: 'pt-BR',
    otherLabel: 'leia em português',
    name: 'pdf (aka. pedro dias fonseca)',
    lede: 'pdƒ(code, people, learning)',
    description: 'Pedro Dias Fonseca (pdf), software engineer at Nubank working on instant payments with Pix and Bre-B. Based in São Paulo, Brazil.',
    ogDescription: 'Software engineer at Nubank, working on instant payments with Pix and Bre-B.',
    jobTitle: 'Software Engineer',
    home: 'pdf, home',
    social: 'Elsewhere',
    toDark: 'dark mode',
    toLight: 'light mode'
  },
  pt: {
    htmlLang: 'pt-BR',
    ogLocale: 'pt_BR',
    other: 'en' as Locale,
    otherHrefLang: 'en',
    otherLabel: 'read in english',
    name: 'pdf (aka. pedro dias fonseca)',
    lede: 'pdƒ(código, pessoas, aprendizado)',
    description: 'Pedro Dias Fonseca (pdf), engenheiro de software no Nubank, trabalhando com pagamentos instantâneos com Pix e Bre-B. Em São Paulo, Brasil.',
    ogDescription: 'Engenheiro de software no Nubank, trabalhando com pagamentos instantâneos com Pix e Bre-B.',
    jobTitle: 'Engenheiro de Software',
    home: 'pdf, início',
    social: 'Em outros lugares',
    toDark: 'modo escuro',
    toLight: 'modo claro'
  }
} as const
