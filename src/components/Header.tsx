import Link from 'next/link';
import { ROUTE_CONTACT, ROUTE_HOME } from '@/routes/routes';
import Image from 'next/image';
import { instagram, tiktok, whatsapp } from '@/static/icons';

export default function Header() {
  return (
    <header
      id="header"
      className={`py-6 px-5 md:px-10 bg-white sticky top-0 z-50 w-full`}
    >
      <div
        className={`h-fit grid grid-cols-2 md:flex-row flex-col gap-4 md:flex items-center justify-center header-inner`}
      >
        <Link
          className={`bg-textColor w-fit text-white px-4 py-2 font-bold header-book-me`}
          href={ROUTE_CONTACT}
        >
          Book me
        </Link>
        <Link
          className={`text-textColor col-span-2 md:col-span-1 font-bold mx-auto font-georgia text-3xl uppercase header-title`}
          href={ROUTE_HOME}
        >
          Anna Kobzar
        </Link>
        <div className={`gap-4 flex items-center justify-end header-social`}>
          <Link
            className={`text-textColor text-3xl`}
            target={`_blank`}
            href={`https://www.instagram.com/kobzar.ann`}
          >
            <Image
              width={24}
              height={24}
              loading="lazy"
              src={instagram}
              alt={'instagram'}
            />
          </Link>
          <Link
            className={`text-textColor text-3xl`}
            target={`_blank`}
            href={`https://wa.me/+447555842463`}
          >
            <Image
              width={24}
              height={24}
              loading="lazy"
              src={whatsapp}
              alt={'whatsapp'}
            />
          </Link>
          <Link
            className={`text-textColor text-3xl`}
            target={`_blank`}
            href={`https://www.tiktok.com/@kobzar.ann?_t=ZM-8yM2owVxRTx&_r=1`}
          >
            <Image
              width={20}
              height={16}
              loading="lazy"
              src={tiktok}
              alt={'tiktok'}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
