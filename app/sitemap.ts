import type { MetadataRoute } from 'next';
import { site } from './content';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/resume`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.url}/llms.txt`, changeFrequency: 'monthly', priority: 0.5 },
  ];
}
