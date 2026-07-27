'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { instagram, tiktok, whatsapp } from '@/static/icons';
import { ROUTE_ABOUT, ROUTE_PORTFOLIO } from '@/routes/routes';

type FooterProps = {
  className?: string;
};

export default function Footer({ className = '' }: FooterProps) {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const showSocialLinks =
    pathname !== ROUTE_PORTFOLIO && pathname !== ROUTE_ABOUT;

  return (
    <footer
      className={`bg-white text-center text-gray-500 text-[10px] md:text-xs px-4 pt-[2.5vh] lg:pt-0 lg:pb-[4vh] pb-[2.5vh] leading-[1.6] md:space-y-2 space-y-1 ${className}`}
    >
      {showSocialLinks && (
        <div className="gap-8 lg:hidden items-center justify-center flex mb-2">
          <a
            className="text-textColor text-3xl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram"
            href="https://www.instagram.com/kobzar.ann"
          >
            <Image
              width={12}
              height={12}
              loading="lazy"
              src={instagram}
              alt=""
            />
          </a>
          <a
            className="text-textColor text-3xl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="whatsapp"
            href="https://wa.me/+447555842463"
          >
            <Image
              width={12}
              height={12}
              loading="lazy"
              src={whatsapp}
              alt=""
            />
          </a>
          <a
            className="text-textColor text-3xl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="tiktok"
            href="https://www.tiktok.com/@kobzar.ann?_t=ZM-8yM2owVxRTx&_r=1"
          >
            <Image width={12} height={10} loading="lazy" src={tiktok} alt="" />
          </a>
        </div>
      )}
      <p className="text-center uppercase">Anna Kobzar - Fashion model</p>
      <p className="text-center">© {currentYear} All rights reserved.</p>
    </footer>
  );
}
