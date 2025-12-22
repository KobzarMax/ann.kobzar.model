import { getPhotos } from '@/api';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const photos = await getPhotos();
  const photosRoutes = photos.map((photo) => ({
    url: `https://annkobzarmodel.vercel.app/portfolio`,
    lastModified: new Date(),
    images: [photo.url]
  }));

  const routes = [
    {
      url: 'https://https://annkobzarmodel.vercel.app/',
      lastModified: new Date()
    },
    {
      url: 'https://annkobzarmodel.vercel.app/about',
      lastModified: new Date()
    },
    {
      url: 'https://annkobzarmodel.vercel.app/portfolio',
      lastModified: new Date()
    }
  ];

  return [...routes, ...photosRoutes];
}
