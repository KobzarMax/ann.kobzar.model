import Hero from '@/components/Hero';
import { getPhotos } from '@/api';

export default async function Home() {
  const photos = await getPhotos();

  return (
    <main className="bg-white lg:overflow-hidden lg:h-[calc(100dvh-84px)] lg:max-h-[calc(100dvh-84px)]">
      <Hero photos={photos} />
    </main>
  );
}
