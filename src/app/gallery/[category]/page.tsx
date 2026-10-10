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
      <div className="fixed top-0 right-0 left-0 h-[12vh] bg-[#4f694a] gap-0 p-0 m-0 border-solid border-white border-y-3 flex items-center z-50">
        <Header title="Photo Gallery"/>
      </div>
      <PhotoGrid photos={photos} initialCategory={String(category.id)} />
    </main>
  );
}