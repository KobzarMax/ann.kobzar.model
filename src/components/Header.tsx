import Link from 'next/link';
import { ROUTE_CONTACT, ROUTE_HOME } from '@/routes/routes';
import HeaderLinks from './HeaderLinks';
import HeaderBurger from './HeaderBurger';
import HeaderSlide from './HeaderSlide';

export default function Header() {
  return (
    <header
      id="header"
      className={`bg-white sticky top-0 z-50 w-full`}
    >
      <div
        className={`h-fit py-5 px-5 md:px-10 relative flex gap-4 items-center justify-between lg:justify-center`}
      >
        <Link
          className={`text-textColor hidden lg:block text-lg uppercase relative w-fit py-2 font-bold mainLink`}
          href={ROUTE_CONTACT}
        >
          Contact
          <span className="linkDecoration bg-textColor absolute bottom-0 left-1/2 -translate-x-1/2 h-[0.1875rem] w-[1.875rem] opacity-0 transition-all duration-300" />
        </Link>
        <Link
          className={`text-textColor font-bold lg:mx-auto font-georgia lg:text-3xl text-xl uppercase`}
          href={ROUTE_HOME}
        >
          Anna Kobzar
        </Link>
        <HeaderLinks />
        <HeaderBurger />
        <HeaderSlide />
      </div>
    </header>
  );
}
