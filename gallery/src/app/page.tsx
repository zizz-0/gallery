import Image from "next/image";
import PhotoGrid from '@/components/photo-grid';
import photos from '@/data/photos.json';

export default function Home() {
  /* TODO: add different photo categories (different pages) 
   * TODO: publish to github pages */
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Photo Gallery</h1>
      <PhotoGrid photos={photos} />
    </main>
  );
}