'use client';

import Image from 'next/image';
import { useState, type SyntheticEvent } from 'react';
import { type RenderPhotoType } from '@/api';

type Props = {
  randomPhoto: RenderPhotoType;
};

export default function VerticalImage({ randomPhoto }: Props) {
  const [isLandscape, setIsLandscape] = useState(false);

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    setIsLandscape(image.naturalWidth > image.naturalHeight);
  };

  return (
    <Image
      width={0}
      height={0}
      sizes="(min-width: 1024px) 50vw, 100vw"
      loading="eager"
      priority
      className={
        isLandscape
          ? 'h-full w-full object-cover object-center'
          : 'h-auto min-h-full w-full object-cover object-center'
      }
      src={`/api/image/${randomPhoto.id}`}
      alt={randomPhoto.name}
      onLoad={handleLoad}
    />
  );
}
