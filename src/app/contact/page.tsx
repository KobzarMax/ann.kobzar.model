import { getPhotos } from '@/api';
import AboutImage from '@/components/AboutImage';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { ROUTE_PORTFOLIO } from '@/routes/routes';
import Link from 'next/link';

export default async function About() {
  const photos = await getPhotos();

  return (
    <main className="bg-white lg:overflow-hidden lg:h-[calc(100dvh-84px)] lg:max-h-[calc(100dvh-84px)]">
      <div className="flex flex-col h-full justify-between">
        <div className="grid grid-rows-[auto_1fr] lg:grid-rows-1 lg:grid-cols-2 md:gap-10 gap-4 py-3 px-5 lg:p-2.5 h-full">
          <div className="lg:max-h-[calc(100dvh-84px)] h-full flex flex-col items-center lg:justify-center md:gap-10 gap-4 py-3 lg:py-10">
            <ContactForm />
          </div>
          <div className="h-full max-h-[75vh] min-h-[500px] flex items-center justify-center appearBlock overflow-hidden relative">
            <AboutImage photos={photos} />
            <Link href={ROUTE_PORTFOLIO} className="absolute inset-0 lg:hidden" />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
