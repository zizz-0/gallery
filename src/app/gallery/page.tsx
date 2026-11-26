import PhotoGrid from '@/components/photo-grid';
import photos from '@/data/photos.json';
import Header from "@/components/header/header";

export default function Home() {
  return (
    <main className="">
      <div className="top-0 z-50 flex min-h-[100px] items-center border-b border-[#e7e7e4] bg-white">
        <Header title="Photo Gallery" light />
      </div>
      <PhotoGrid photos={photos}/>
    </main>
  );
}