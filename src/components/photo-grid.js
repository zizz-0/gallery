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
  // sort by date, location, category
  return (
    <div>
      <div className="top-[100px] z-40 border-b border-[#e7e7e4] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] items-center gap-5 px-4 py-3 md:px-8">
          <label
            htmlFor="gallery-category"
            className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500"
          >
            Filter by
          </label>
          <div className="relative">
            <select
              id="gallery-category"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="min-w-36 cursor-pointer appearance-none border-0 border-b border-neutral-400 bg-transparent py-2 pl-1 pr-7 text-sm text-neutral-900 hover:border-neutral-700 focus:border-neutral-900 focus:outline-none"
            >
              <option value="all">All photos</option>
              {galleryCategories.map(({ id, label }) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ))}
            </select>
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2"
            >
              <path d="m3 6 5 5 5-5" />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative z-0 grid grid-cols-3 gap-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
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
              className="rounded shadow border-solid border-1"
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