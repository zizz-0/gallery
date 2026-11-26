import Header from "@/components/header/header";

export default function Testimonials() {
  return (
    <main className="min-h-screen bg-white">
      <div className="sticky top-0 z-50 flex min-h-[100px] items-center border-b border-neutral-200 bg-white">
        <Header title="Testimonials" light />
      </div>
      <section className="mx-auto flex min-h-[calc(100svh-100px)] max-w-[1400px] items-center justify-center px-5 py-16 sm:px-8">
        <p className="text-center leading-relaxed text-neutral-600">
          Page under construction, check back soon!
        </p>
      </section>
    </main>
  );
}
