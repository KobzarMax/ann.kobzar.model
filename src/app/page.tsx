import Link from 'next/link';
import { getPhotos } from '@/api';
import VerticalImage from '@/components/VerticalImage';
import { ROUTE_ABOUT, ROUTE_PORTFOLIO } from '@/routes/routes';

export default async function HomePage() {
  const photos = await getPhotos();

  if (photos.length < 2) return null;

  const shuffled = [...photos].sort(() => Math.random() - 0.5);
  const [randomPhotoOne, randomPhotoTwo] = shuffled;

  return (
    <main className="bg-white lg:overflow-hidden lg:h-[calc(100svh-67px)] lg:max-h-[calc(100svh-67px)]">
      <div className="grid grid-rows-[auto_auto] h-full -space-y-0.5 lg:space-y-0 lg:grid-rows-1 lg:grid-cols-2">
        <div className="max-h-[calc(100svh-67px)] min-h-125 relative">
          <VerticalImage randomPhoto={randomPhotoOne} />
          <Link
            className="inset-0 absolute outline-none focus:outline-none active:outline-none mainLink"
            href={ROUTE_ABOUT}
            aria-label="About page"
          >
            <div className="absolute left-1/2 w-full -translate-x-1/2 bottom-[12.5%]">
              <div className="px-3 b py-3 relative flex flex-col justify-center items-center gap-2 w-full">
                <span className="uppercase text-white w-full text-center text-[25px] lg:text-[2.188rem] tracking-basic font-bold">
                  about
                </span>
                <span className="uppercase text-white text-[13px] font-normal flex items-center gap-2">
                  discover
                  <span
                    aria-hidden="true"
                    className="linkDecoration inline-block size-1.5 shrink-0 rotate-[-45deg] border-r border-b opacity-0 transition-all duration-300"
                  />
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="max-h-[calc(100svh-67px)] min-h-125 relative">
          <VerticalImage randomPhoto={randomPhotoTwo} />
          <Link
            aria-label="Portfolio page"
            className="inset-0 absolute outline-none focus:outline-none active:outline-none mainLink"
            href={ROUTE_PORTFOLIO}
          >
            <div className="absolute left-1/2 w-full -translate-x-1/2 bottom-[12.5%]">
              <div className="px-3 b py-3 relative flex flex-col justify-center items-center gap-2 w-full">
                <span className="uppercase text-white w-full text-center text-[25px] lg:text-[2.188rem] tracking-basic font-bold">
                  portfolio
                </span>
                <span className="uppercase text-white text-[13px] font-normal flex items-center gap-2">
                  view
                  <span
                    aria-hidden="true"
                    className="linkDecoration inline-block size-1.5 shrink-0 rotate-[-45deg] border-r border-b opacity-0 transition-all duration-300"
                  />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
