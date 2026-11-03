export const locales = ['en', 'pt'] as const
export type Locale = (typeof locales)[number]

export const siteUrl = 'https://pdf.engineer'

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
    lede: 'Writing code since 2013 and currently living in São Paulo - SP, Brazil',
    description: 'Brief description about who am I, where I live, work, and how to contact me.',
    ogDescription: 'Information about work and contact',
    jobTitle: 'Senior Software Engineer',
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
    lede: 'Escrevo código desde 2013 e atualmente vivo em São Paulo - SP, Brasil.',
    description: 'Breve descrição sobre quem sou, onde moro, onde trabalho e como entrar em contato comigo.',
    ogDescription: 'Informações sobre trabalho e contato',
    jobTitle: 'Engenheiro de Software Sênior',
    home: 'pdf, início',
    social: 'Em outros lugares',
    toDark: 'modo escuro',
    toLight: 'modo claro'
  }
} as const
