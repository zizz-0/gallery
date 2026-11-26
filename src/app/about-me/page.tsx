import AboutMe from '@/components/about-me';
import Header from "@/components/header/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="sticky top-0 z-50 flex min-h-[100px] items-center border-b border-neutral-200 bg-white">
        <Header title="About Me!" light />
      </div>
      <AboutMe />
    </main>
  );
}