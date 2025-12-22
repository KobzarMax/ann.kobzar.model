'use client';

import usePhotoStore from '@/store/photoStore';
import { useClickOutside } from '@/utils/client';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { lazy, useCallback, useEffect, useRef } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function PhotoPopup() {
  const {
    isDialogOpen,
    togglePhotoDialog,
    setHomePhotoUrl,
    setActivePhotoUrl,
    carouselPhotos,
    setCarouselPhotos
  } = usePhotoStore();

  const dialogRef = useRef<HTMLDivElement>(null);

  const handleClosePhoto = useCallback(() => {
    togglePhotoDialog();
    setHomePhotoUrl('');
    setActivePhotoUrl('');
    setCarouselPhotos([]);
  }, [
    togglePhotoDialog,
    setHomePhotoUrl,
    setActivePhotoUrl,
    setCarouselPhotos
  ]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClosePhoto();
    };
    if (isDialogOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isDialogOpen, handleClosePhoto]);

  useClickOutside(dialogRef, handleClosePhoto);

  if (!isDialogOpen) return null;

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    // adaptiveHeight: true,
    arrows: false,
    lazyLoad: true
  };

  return (
    <div className="fixed inset-0 z-[1000] w-screen h-screen flex items-start justify-center bg-black/20">
      <div
        ref={dialogRef}
        className="grid grid-rows-1 px-1 md:px-0 lg:min-h-full max-h-[95%] pt-[4.5rem] lg:pt-5 py-5 relative justify-start"
      >
        <Slider
          {...settings}
          className="lg:max-w-4xl w-full mx-auto flex items-start justify-center"
        >
          {carouselPhotos?.map((photo) => (
            <div key={photo.id} className="!grid relative w-full !h-fit">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                loading="lazy"
                className="object-contain row-span-1 max-h-[99vh]"
                style={{ width: '100%', height: '100%' }}
                src={photo.url}
                alt={photo.name}
              />
              <button
                onClick={handleClosePhoto}
                className="absolute cursor-pointer rotate-90 md:hidden top-2 right-1.5 z-10 px-3 py-1.5"
              >
                <FontAwesomeIcon className="text-white" icon={faX} />
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
