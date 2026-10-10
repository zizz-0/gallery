"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PhotoModal from "./photo-modal";
import { galleryCategories } from "@/data/gallery-categories";

export default function PhotoGrid({ photos, initialCategory = "all" }) {
  const router = useRouter();
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    setSelectedCategory(initialCategory);
    setSelectedPhotoIndex(null);
  }, [initialCategory]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedPhotoIndex(null);

    const category = galleryCategories.find(
      ({ id }) => id === Number(categoryId)
    );
    router.push(category ? `/gallery/${category.slug}` : "/gallery");
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
    *   maybe re-edit cardinal pics
    *   re-edit fairy tree
  */}
  return (
    <div>
      <div className="flex pl-5 pt-4 pb-3 bg-white text-black sticky top-[12vh] z-30">
        <label className="mr-2 font-semibold">Filter Gallery:</label>
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="border rounded px-3 py-1 cursor-pointer hover:cursor-pointer"
        >
          <option value="all">All</option>
          {galleryCategories.map(({ id, label }) => (
            <option key={id} value={id}>
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