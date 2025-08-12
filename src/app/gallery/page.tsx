import Image from "next/image";
import PhotoGrid from '@/components/photo-grid';
import photos from '@/data/photos.json';

export default function Home() {
  return (
    <main className="">
      <div className="fixed top-0 right-0 left-0 h-[12vh] bg-[#4f694a] gap-0 p-0 m-0 border-solid border-white border-y-3 flex items-center z-50">
        <h1 className="text-3xl p-5" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>Photo Gallery</h1>
        <div className="absolute right-6 top-[3vh] flex items-center">
          <a href="/" className="mx-4 mr-2 text-2xl underline" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>Home</a>
          <a href="/gallery" className="mx-4 mr-8 text-2xl underline" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>Gallery</a>
          <a href="https://www.instagram.com/zizz.photography/" target="_blank">
            <img src="icons/instagram.png" width={35} height={35}/>
          </a>
        </div>
      </div>
      <PhotoGrid photos={photos}/>
    </main>
  );
}