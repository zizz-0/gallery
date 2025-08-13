import ScrollHighlights from '@/components/scroll-highlights';
import Cover from '@/components/cover';
import photos from '@/data/photos.json';
import Header from "@/components/header/header";

export default function Home() {

  /* TODO: add different photo categories (different pages) */
  return (
    <main className="bg-white">
      <div className="fixed top-0 right-0 left-0 h-[12vh] bg-[#4f694a] gap-0 p-0 m-0 border-solid border-white border-y-3 flex items-center z-50">
        <Header title="Zoe Rizzo Photography"/>
      </div>
      <Cover/>
      <ScrollHighlights photos={photos}/>
    </main>
  );
}