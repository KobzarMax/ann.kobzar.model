'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTE_PORTFOLIO } from '@/routes/routes';

type Photo = {
  id: string;
  name: string;
};

type Props = {
  photos: Photo[];
};

export default function AboutImage({ photos }: Props) {
  const [randomPhoto, setRandomPhoto] = useState<Photo | null>(null);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const index = Math.floor(Math.random() * photos.length);
    setRandomPhoto(photos[index]);
  }, [photos]);

  if (!randomPhoto) return null;

  return isLandscape ? (
    <div className="h-full max-h-[75vh] flex items-center justify-center appearBlock overflow-hidden relative">
      <Image
        width={0}
        height={0}
        style={{ height: 'auto' }}
        sizes="100vw"
        loading="eager"
        priority
        className="max-h-[calc(100dvh-84px)] w-fit object-center object-contain"
        src={`/api/image/${randomPhoto.id}`}
        alt={randomPhoto.name}
        onLoad={(img) => {
          setIsLandscape(
            img.currentTarget.naturalWidth > img.currentTarget.naturalHeight
          );
        }}
      />
      <Link href={ROUTE_PORTFOLIO} className="absolute inset-0 lg:hidden" />
    </div>
  ) : (
    <div className="h-full max-h-[75vh] flex items-center justify-center appearBlock overflow-hidden relative">
      <Image
        width={0}
        height={0}
        style={{ height: 'auto' }}
        sizes="100vw"
        loading="eager"
        priority
        className="max-h-[calc(100dvh-84px)] w-fit object-contain"
        src={`/api/image/${randomPhoto.id}`}
        alt={randomPhoto.name}
        onLoad={(img) => {
          setIsLandscape(
            img.currentTarget.naturalWidth > img.currentTarget.naturalHeight
          );
        }}
      />
      <Link href={ROUTE_PORTFOLIO} className="absolute inset-0 lg:hidden" />
    </div>
  );
}
