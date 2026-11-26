import ScrollHighlights from '@/components/scroll-highlights';
import Cover from '@/components/cover';
import photos from '@/data/photos.json';
import Header from "@/components/header/header";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="relative">
        <Cover />
        <Header title="Zoe Rizzo Photography" overlay />
      </div>

      <section aria-label="Explore" className="bg-white px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-3 md:grid-cols-3">
          {[
            { title: "Inquiries", href: "/inquiries" },
            { title: "Gallery", href: "/gallery" },
            { title: "About Me", href: "/about-me" },
          ].map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              className="group flex min-h-56 flex-col justify-between border border-[#e7e7e4] bg-white p-7 text-[#242424] transition-colors hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 sm:min-h-64 sm:p-9"
            >
              <div className="flex items-center justify-between text-xs tracking-[0.16em]">
                <span>0{index + 1}</span>
                <span aria-hidden="true" className="text-lg">
                  ↗︎
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-light uppercase tracking-[0.1em] sm:text-3xl">
                  {item.title}
                </h2>
                <span className="mt-4 inline-block border-b border-current pb-1 text-xs uppercase tracking-[0.14em]">
                  Learn more
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <ScrollHighlights photos={photos} />
    </main>
  );
}