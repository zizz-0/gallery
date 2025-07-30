import Image from "next/image";
import PhotoGrid from '@/components/photo-grid';
import photos from '@/data/photos.json';

export default function Home() {
  /* TODO: add different photo categories (different pages) 
   * TODO: home page?
   * TODO: add icons/links on header banner
   * TODO: publish to github pages */
  return (
    <main className="">
      <div className="fixed top-0 right-0 left-0 h-[12vh] bg-[#4f694a] gap-0 p-0 m-0 border-solid border-white border-y-3 flex items-center z-50">
        <h1 className="text-3xl p-5" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>Photo Gallery</h1>
        <a href="https://www.instagram.com/zizz.photography/" target="_blank">
          <img src="icons/instagram.png" width={40} height={40} className="absolute right-6 top-[3vh]"/>
        </a>
      </div>
      <PhotoGrid photos={photos}/>
    </main>
  );
}