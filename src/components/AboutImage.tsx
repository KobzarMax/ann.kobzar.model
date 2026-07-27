'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, type SyntheticEvent } from 'react';
import { type RenderPhotoType } from '@/api';
import { ROUTE_PORTFOLIO } from '@/routes/routes';

type Props = {
  photos: RenderPhotoType[];
};

export default function AboutImage({ photos }: Props) {
  const [randomPhoto, setRandomPhoto] = useState<RenderPhotoType | null>(null);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    if (photos.length === 0) {
      setRandomPhoto(null);
      return;
    }

    const index = Math.floor(Math.random() * photos.length);
    setRandomPhoto(photos[index]);
  }, [photos]);

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    setIsLandscape(image.naturalWidth > image.naturalHeight);
  };

  if (!randomPhoto) return null;

  return (
    <div className="h-full max-h-[75vh] flex items-center justify-center appearBlock overflow-hidden relative">
      <Image
        width={0}
        height={0}
        style={{ height: 'auto' }}
        sizes="(min-width: 1024px) 50vw, 100vw"
        loading="eager"
        priority
        className={`max-h-[calc(100dvh-67px)] w-fit object-contain ${
          isLandscape ? 'object-center' : ''
        }`}
        src={`/api/image/${randomPhoto.id}`}
        alt={randomPhoto.name}
        onLoad={handleLoad}
      />
      <Link
        aria-hidden="true"
        href={ROUTE_PORTFOLIO}
        className="absolute inset-0 lg:hidden"
      />
    </div>
  );
}
