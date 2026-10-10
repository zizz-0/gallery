import AboutMe from '@/components/about-me';
import Slider from '@/components/slider';
import Header from "@/components/header/header";
// @ts-expect-error Next.js handles global CSS imports; TypeScript may not resolve this side-effect import.
import "../globals.css";

export default function Home() {

  return (
    <main className="bg-white">
      <div className="fixed top-0 right-0 left-0 h-[12vh] bg-[#4f694a] gap-0 p-0 m-0 border-solid border-white border-y-3 flex items-center z-50">
        <Header title="Zoe Rizzo Photography"/>
      </div>
      <AboutMe/>
      <hr className="my-10 h-0.5 border-t-0 bg-[#4f694a] opacity-100 w-[90vw] mx-auto"/>
      <Slider
        firstImage="/secondary-images/willow.jpg"
        secondImage="/secondary-images/willow-distractions.jpg"
        firstImageAlt="Willow"
        secondImageAlt="Willow with distractions removed"
        className="mx-auto mb-10 w-[90vw] md:mx-0 md:ml-[5vw] md:w-1/3"
      />
    </main>
  );
}