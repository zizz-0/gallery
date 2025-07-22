import Image from "next/image";
import PhotoGrid from '@/components/photo-grid';
import photos from '@/data/photos.json';

export default function Home() {
  /* TODO: add different photo categories (different pages) 
   * TODO: publish to github pages */
  return (
    <main className="">
      <div className="h-1/10 bg-[#4f694a] gap-0 p-0 m-0 border-solid border-white border-y-3 flex items-center relative z-50">
        <h1 className="text-3xl p-5" style={{ fontFamily: 'Trebuchet MS, sans-serif' }}>Photo Gallery</h1>
      </div>
      <PhotoGrid photos={photos} />
    </main>
  );
}