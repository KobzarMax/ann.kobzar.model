'use client';

import { useState } from 'react';
import Image from 'next/image';

type Photo = {
  id: string;
  name: string;
};

type Props = {
  randomPhoto: Photo;
};

export default function VerticalRandomPhoto({ randomPhoto }: Props) {
  const [isLandscape, setIsLandscape] = useState(false);

  return isLandscape ? (
    <Image
      fill
      sizes="100vw"
      loading="eager"
      className="max-h-[calc(100dvh-84px)] object-center object-cover"
      src={`/api/image/${randomPhoto.id}`}
      alt={randomPhoto.name}
      onLoad={(img) => {
        setIsLandscape(
          img.currentTarget.naturalWidth > img.currentTarget.naturalHeight
        );
      }}
    />
  ) : (
    <Image
      width={0}
      height={0}
      style={{ width: '100%', height: 'auto' }}
      sizes="100vw"
      loading="eager"
      className="max-h-[calc(100dvh-84px)] object-top min-h-full object-cover"
      src={`/api/image/${randomPhoto.id}`}
      alt={randomPhoto.name}
      onLoad={(img) => {
        setIsLandscape(
          img.currentTarget.naturalWidth > img.currentTarget.naturalHeight
        );
      }}
    />
  );
}
