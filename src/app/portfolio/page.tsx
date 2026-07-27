import { getPhotos } from '@/api';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import PhotoPopup from '@/components/PhotoPopup';

export default async function PortfolioPage() {
  const photos = await getPhotos();

  return (
    <>
      <main className="bg-white">
        <Gallery photos={photos} />
        <PhotoPopup carouselPhotos={photos} />
      </main>
      <Footer className="lg:pt-[2.5vh]" />
    </>
  );
}
