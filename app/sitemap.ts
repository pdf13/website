import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/i18n'

const languages = { en: `${siteUrl}/en`, 'pt-BR': `${siteUrl}/pt`, 'x-default': siteUrl }

export default function sitemap (): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/en`, alternates: { languages } },
    { url: `${siteUrl}/pt`, alternates: { languages } }
  ]
}
