import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://acebarbershopgg.com',  // Homepage
      lastModified: new Date(),  // Last modified date
      changeFrequency: 'daily',
      priority: 1.0,  // Higher priority for homepage
    },
    {
      url: 'https://acebarbershopgg.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://acebarbershopgg.com/gallery',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://acebarbershopgg.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
