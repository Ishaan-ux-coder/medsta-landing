import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://medsta.in',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Add additional specialized pages here if/when they exist
    // e.g. /pharmacy, /diagnostics, /doctor-consultation, /locations/lucknow
  ]
}
