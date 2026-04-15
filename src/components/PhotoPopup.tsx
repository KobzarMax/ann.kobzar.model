'use client';

import usePhotoStore from '@/store/photoStore';
import { useClickOutside } from '@/utils/client';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useRef } from 'react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Keyboard, Mousewheel } from 'swiper/modules';
import { type RenderPhotoType } from '@/api';

export default function PhotoPopup({
  carouselPhotos
}: {
  carouselPhotos?: RenderPhotoType[] | null;
}) {
  const {
    isDialogOpen,
    togglePhotoDialog,
    setHomePhotoUrl,
    setActivePhotoUrl,
    activePhotoUrl
  } = usePhotoStore();
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleClosePhoto = useCallback(() => {
    togglePhotoDialog();
    setHomePhotoUrl('');
    setActivePhotoUrl('');
  }, [togglePhotoDialog, setHomePhotoUrl, setActivePhotoUrl]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClosePhoto();
    };
    if (isDialogOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isDialogOpen, handleClosePhoto]);

  useClickOutside(dialogRef, () => handleClosePhoto());

  const displayPhotos = useMemo(() => {
    if (!carouselPhotos || carouselPhotos.length === 0) return [];

    let startIndex = 0;
    if (activePhotoUrl) {
      const foundIdx = carouselPhotos.findIndex(p => p.url === activePhotoUrl);
      if (foundIdx !== -1) startIndex = foundIdx;
    }

    const result = [];
    const total = carouselPhotos.length;
    const limit = Math.min(total, 10);

    for (let i = 0; i < limit; i++) {
      result.push(carouselPhotos[(startIndex + i) % total]);
    }
    return result;
  }, [carouselPhotos, activePhotoUrl]);

  if (isDialogOpen)
    return (
      <div className="fixed inset-0 z-[1000] w-screen h-screen flex items-center lg:items-start justify-center bg-black/20">
        <div
          ref={dialogRef}
          className={`grid grid-rows-1 px-1 md:px-0 lg:min-h-full max-h-[95%] py-5 relative justify-start`}
        >
          <Swiper
            slidesPerView={1}
            centeredSlides
            initialSlide={0}
            keyboard={{
              enabled: true
            }}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
              releaseOnEdges: true,
              thresholdDelta: 50
            }}
            touchRatio={1}
            threshold={20}
            longSwipes={false}
            loop={displayPhotos.length >= 4}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            modules={[EffectFade, Mousewheel, Keyboard]}
            className="swiper lg:max-w-4xl w-full mx-auto flex items-start justify-center reviews-swiper relative"
          >
            {displayPhotos.map((photo, idx) => (
              <SwiperSlide
                key={`${photo.id}-${idx}`}
                className="swiper-slide relative w-full"
              >
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  loading="lazy"
                  className="object-contain row-span-1"
                  style={{ width: '100%', height: '100%' }}
                  src={photo.url}
                  alt={photo.name}
                />
                <button
                  onClick={() => handleClosePhoto()}
                  className="absolute cursor-pointer top-4 right-4 z-20 p-2 transition-all duration-300 hover:scale-110 active:scale-95 group lg:hidden"
                >
                  <FontAwesomeIcon 
                    className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] opacity-70 group-hover:opacity-100 transition-opacity" 
                    icon={faX} 
                    size="lg"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
}