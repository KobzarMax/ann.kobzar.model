import Image from "next/image"
import { instagram, tiktok, whatsapp } from '@/static/icons';
import Link from "next/link";

export default function HeaderLinks() {
    return (
        <div className={`gap-4 items-center justify-end hidden [.headerSlide_&]:flex [.headerSlide_&]:mt-10 lg:flex`}>
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
    )
}