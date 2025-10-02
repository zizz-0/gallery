"use client";
import Image from "next/image";
import { useState } from "react";
import PhotoModal from "./photo-modal";

export default function PhotoGrid({ photos }) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = {
    1: "Animals",
    2: "People",
    3: "Nature",
  };

  const handleNext = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
    }
  };

  const handlePrev = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length
      );
    }
  };

  const filteredPhotos =
    selectedCategory === "all"
      ? photos
      : photos.filter((photo) =>
          photo.category.includes(Number(selectedCategory))
        );

  return (
    <div>
      <div className="flex pl-5 pt-4 pb-3 pt-[13vh] bg-white text-black relative">
        <label className="mr-2 font-semibold">Filter Gallery:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded px-3 py-1 cursor-pointer hover:cursor-pointer relative z-50"
        >
          <option value="all">All</option>
          {Object.entries(categories).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0">
        {filteredPhotos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhotoIndex(index)}
            className="cursor-pointer aspect-[1/1] relative hover:opacity-50"
          >
            <Image
              src={photo.thumbnailUrl}
              alt={photo.caption}
              fill
              sizes="(max-width: 640px) 100w, 300px"
              className="rounded shadow border-solid border-2"
            />
          </div>
        ))}
      </div>

      {selectedPhotoIndex !== null && (
        <PhotoModal
          photo={filteredPhotos[selectedPhotoIndex]}
          onClose={() => setSelectedPhotoIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}