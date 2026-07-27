import Link from 'next/link';
import { ROUTE_CONTACT, ROUTE_HOME } from '@/routes/routes';
import HeaderLinks from './HeaderLinks';
import HeaderBurger from './HeaderBurger';
import HeaderSlide from './HeaderSlide';

export default function Header() {
  return (
    <header
      id="header"
      className="bg-white sticky top-0 z-50 w-full lg:overflow-hidden"
    >
      <div className="h-fit py-5 px-5 md:px-10 relative flex gap-4 items-center justify-between">
        <HeaderLinks />
        <Link
          className="text-textColor font-bold lg:mx-auto font-georgia lg:text-3xl text-xl uppercase lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2"
          href={ROUTE_HOME}
        >
          Anna Kobzar
        </Link>
        <Link
          className="text-textColor hidden lg:block text-[13px] uppercase relative w-fit py-1 font-bold mainLink"
          href={ROUTE_CONTACT}
        >
          Contact
          <span className="linkDecoration bg-textColor absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-full opacity-0 transition-all duration-300" />
        </Link>
        <HeaderBurger />
        <HeaderSlide />
      </div>
    </header>
  );
}
