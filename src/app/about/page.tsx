import Image from 'next/image';
import Link from 'next/link';
import { getPhotos } from '@/api';
import AboutImage from '@/components/AboutImage';
import Footer from '@/components/Footer';
import { ROUTE_PORTFOLIO } from '@/routes/routes';
import { instagram, tiktok, whatsapp } from '@/static/icons';

const personalData = [
  {
    key: 'height',
    value: `5'9¾" / 177 cm`
  },
  {
    key: 'biust',
    value: '32.5" / 83 cm'
  },
  {
    key: 'waist',
    value: '23.5" / 60 cm'
  },
  {
    key: 'hips',
    value: '35.5" / 90 cm'
  },
  {
    key: 'eyes',
    value: 'brown'
  },
  {
    key: 'hair',
    value: 'brown'
  },
  {
    key: 'shoes',
    value: '5 UK / 38 EU / 7 US'
  }
];

const socialLinks = [
  {
    href: 'https://www.instagram.com/kobzar.ann',
    label: 'instagram',
    icon: instagram,
    width: 12,
    height: 12
  },
  {
    href: 'https://wa.me/+447555842463',
    label: 'whatsapp',
    icon: whatsapp,
    width: 12,
    height: 12
  },
  {
    href: 'https://www.tiktok.com/@kobzar.ann?_t=ZM-8yM2owVxRTx&_r=1',
    label: 'tiktok',
    icon: tiktok,
    width: 12,
    height: 10
  }
];

export default async function AboutPage() {
  const photos = await getPhotos();

  return (
    <main className="bg-white lg:overflow-hidden lg:h-[calc(100dvh-67px)] lg:max-h-[calc(100dvh-67px)]">
      <div className="flex flex-col h-full justify-between">
        <div className="grid grid-rows-[auto_1fr] lg:grid-rows-1 lg:grid-cols-2 md:gap-10 gap-4 px-5 lg:p-2.5 h-full">
          <div className="lg:max-h-[calc(100dvh-67px)] h-full flex flex-col lg:justify-center py-3 lg:w-6/12 lg:mx-auto lg:py-10">
            <span className="text-[13px] mb-3 lg:hidden font-normal uppercase text-gray-500">
              about
            </span>
            <h1 className="text-xl lg:text-5xl mb-10 font-cormorant hidden lg:block uppercase font-normal">
              Fashion model
            </h1>
            <h1 className="text-4xl mb-6 font-cormorant block lg:hidden font-normal">
              Fashion model <br /> based in UK
            </h1>
            <p className="text-[13px] hidden lg:block mb-3">
              UK based model available for <br /> edotorial, cemmercial and
              runway projects.
            </p>
            <div className="gap-4 grid grid-cols-1 grid-rows-[1fr_auto] lg:grid-cols-2 lg:flex lg:flex-col items-start justify-center">
              <ul className="divide-y lg:divide-none divide-gray-200 w-full personalDataList lg:space-y-4 relative">
                {personalData.map(({ key, value }) => (
                  <li key={key} className="grid py-3 grid-cols-2">
                    <span className="uppercase text-sm tracking-widest text-gray-500 font-normal">
                      {key}
                    </span>
                    <span className="uppercase text-sm tracking-widest font-normal text-textColor">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mainLink flex items-center gap-4">
                <Link
                  className="text-textColor text-[13px] uppercase relative w-fit py-1 font-bold"
                  href={ROUTE_PORTFOLIO}
                >
                  portfolio
                  <span className="bg-textColor absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-full transition-all duration-300" />
                </Link>
                <span
                  aria-hidden="true"
                  className="linkDecoration inline-block size-1.5 shrink-0 rotate-[-45deg] border-r border-b opacity-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          <AboutImage photos={photos} />

          <div className="gap-8 lg:hidden items-center justify-center flex">
            {socialLinks.map(({ href, label, icon, width, height }) => (
              <a
                key={label}
                className="text-textColor text-3xl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                href={href}
              >
                <Image
                  width={width}
                  height={height}
                  loading="lazy"
                  src={icon}
                  alt=""
                />
              </a>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
