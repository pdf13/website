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
    params: ['code', 'people', 'learning'],
    description: 'Pedro Dias Fonseca (pdf), Lead Software Engineer at Nubank working on instant payments with Pix and Bre-B. Based in São Paulo, Brazil.',
    ogDescription: 'Lead Software Engineer at Nubank, working on instant payments with Pix and Bre-B.',
    jobTitle: 'Lead Software Engineer',
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
    params: ['código', 'pessoas', 'aprendizado'],
    description: 'Pedro Dias Fonseca (pdf), Lead Software Engineer no Nubank, trabalhando com pagamentos instantâneos com Pix e Bre-B. Em São Paulo, Brasil.',
    ogDescription: 'Lead Software Engineer no Nubank, trabalhando com pagamentos instantâneos com Pix e Bre-B.',
    jobTitle: 'Lead Software Engineer',
    home: 'pdf, início',
    social: 'Em outros lugares',
    toDark: 'modo escuro',
    toLight: 'modo claro'
  }
} as const
