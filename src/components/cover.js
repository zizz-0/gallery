export default function Cover() {
  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden">
      <img
        src="/secondary-images/IMG_8400.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/35" />
      <p className="absolute bottom-10 left-6 z-10 max-w-3xl text-base font-light uppercase leading-tight tracking-[0.06em] text-white sm:bottom-14 sm:left-10 sm:text-lg md:left-16 md:text-2xl">
        <span className="block whitespace-nowrap text-[2.36em]">Rochester, NY</span>
        <span className="block whitespace-nowrap text-[0.96em]">
          Portrait &amp; Nature Photographer
        </span>
      </p>
    </section>
  );
}