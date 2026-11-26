import { notFound } from "next/navigation";
import PhotoGrid from "@/components/photo-grid";
import photos from "@/data/photos.json";
import { galleryCategories } from "@/data/gallery-categories";
import Header from "@/components/header/header";

export function generateStaticParams() {
  return galleryCategories.map(({ slug }) => ({ category: slug }));
}

export default async function CategoryGallery({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = galleryCategories.find(({ slug: value }) => value === slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="">
      <div className="sticky top-0 z-50 flex min-h-[100px] items-center border-b border-[#e7e7e4] bg-white">
        <Header title="Photo Gallery" light />
      </div>
      <PhotoGrid photos={photos} initialCategory={String(category.id)} />
    </main>
  );
}