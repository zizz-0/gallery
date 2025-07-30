"use client";
import Image from 'next/image';
import { useState } from 'react';
import PhotoModal from './photo-modal';

export default function PhotoGrid({ photos }) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const handleNext = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  const handlePrev = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0 mt-[12vh]">
        {/* TODO: randomize order? add sort feature? */}
        {photos.map((photo, index) => (
          <div key={photo.id} onClick={() => setSelectedPhotoIndex(index)} className="cursor-pointer w-full sm:w-auto aspect-[1/1] relative hover:opacity-50">
            <Image
              src={photo.thumbnailUrl}
              alt={photo.caption}
              fill
              sizes="(max-width: 640px) 100vw, 300px"
              className="rounded shadow border-solid border-2"
            />
          </div>
        ))}
      </div>

      {selectedPhotoIndex !== null && (
        <PhotoModal
          photo={photos[selectedPhotoIndex]}
          onClose={() => setSelectedPhotoIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
