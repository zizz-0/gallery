"use client";
import Image from "next/image";
import { useState } from "react";
import PhotoModal from "./photo-modal";

export default function PhotoGrid({ photos }) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = {
    1: "Wildlife",
    2: "Portrait",
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

  {/* TODO:
    * add sort options --
    *   date
    *   category
    *   location
    * 
    * sort by both asc/desc
  */}
  const sortedPhotos = [...photos].sort(
    (a, b) => b.id - a.id
  );

  const filteredPhotos =
    selectedCategory === "all"
      ? sortedPhotos
      : sortedPhotos.filter((photo) =>
          photo.category.includes(Number(selectedCategory))
        );
  
  {/* TODO: 
    * update photos.json -- 
    *   rm 1-2 chickadees
    *   rm all(?) aquarium
    *   rm nature (mendon boardwalk, rit forest path, sun thru trees, cherry tree, mendon lake)
    *   add more portraits
    * 
    *   maybe re-edit cardinal pics, rm one
    *   re-edit fairy tree
  */}
  return (
    <div>
      <div className="flex pl-5 pt-4 pb-3 bg-white text-black sticky top-[12vh] z-30">
        <label className="mr-2 font-semibold">Filter Gallery:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded px-3 py-1 cursor-pointer hover:cursor-pointer"
        >
          <option value="all">All</option>
          {Object.entries(categories).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0 relative z-0 mt-[12vh]">
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