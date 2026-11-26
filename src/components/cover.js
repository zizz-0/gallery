export default function Cover() {
  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden">
      <picture className="absolute inset-0">
        <source
          media="(max-width: 767px)"
          srcSet="/secondary-images/IMG_7593.jpg"
        />
        <img
          src="/secondary-images/IMG_8179.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/35" />
      <p className="absolute bottom-10 left-1/2 z-10 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 text-center text-base font-light uppercase leading-tight tracking-[0.06em] text-white sm:bottom-14 sm:left-10 sm:w-auto sm:translate-x-0 sm:text-left sm:text-lg md:left-16 md:text-2xl">
        <span className="block whitespace-nowrap text-[2.36em]">Rochester, NY</span>
        <span className="block whitespace-nowrap text-[0.96em]">
          Portrait &amp; Nature Photographer
        </span>
      </p>
    </section>
  );
}