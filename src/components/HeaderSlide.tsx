'use client';

import Link from 'next/link';
import {
  ROUTE_ABOUT,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_PORTFOLIO
} from '@/routes/routes';
import { useHeaderStore } from '@/store/useHeaderStore';
import HeaderLinks from './HeaderLinks';

const navigation = [
  { href: ROUTE_HOME, label: 'Home' },
  { href: ROUTE_ABOUT, label: 'About' },
  { href: ROUTE_PORTFOLIO, label: 'Portfolio' },
  { href: ROUTE_CONTACT, label: 'Contact' }
];

export default function HeaderSlide() {
  const close = useHeaderStore((state) => state.close);

  return (
    <div className="fixed header-slide-inner headerSlide left-0 top-0 w-dvw z-40 h-dvh bg-white/20 backdrop-blur-[5px] opacity-0 transition-all ease-in-out duration-700 -translate-y-[100%] [.active_&]:-translate-y-0 [.active_&]:opacity-100 py-24 px-4 flex flex-col items-center justify-center gap-6">
      {navigation.map(({ href, label }) => (
        <Link
          key={href}
          onClick={close}
          className="text-textColor text-xl uppercase relative w-fit py-1 font-bold mainLink"
          href={href}
        >
          {label}
          <span className="linkDecoration bg-textColor absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-full opacity-0 transition-all duration-300" />
        </Link>
      ))}
      <div className="py-2">
        <HeaderLinks />
      </div>
    </div>
  );
}
