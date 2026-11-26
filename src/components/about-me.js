import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="mx-auto grid min-h-[calc(100svh-100px)] w-full max-w-[1400px] grid-cols-1 items-center gap-8 px-5 py-10 sm:px-8 md:h-[80vh] md:min-h-0 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:px-12 md:py-0">
      <div className="flex min-h-[240px] items-center justify-center sm:min-h-[320px] md:min-h-0">
        <Image
          src="/secondary-images/me1.JPG"
          alt="Zoe outdoors with her camera"
          width={659}
          height={878}
          sizes="(max-width: 768px) 70vw, 35vw"
          className="h-auto max-h-[40vh] w-auto max-w-[70%] object-contain md:max-h-[65vh] md:max-w-[85%]"
        />
      </div>

      <div className="h-full bg-neutral-100 p-6 sm:p-10 md:p-12 sm:min-h-[520px] md:min-h-[60vh]">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
          About me
        </p>
        <h2 className="mb-6 text-3xl font-light text-neutral-900 sm:text-4xl">
          Hello, I&apos;m Zoe!
        </h2>
        <p className="mb-4 text-[0.95rem] leading-relaxed text-neutral-700 sm:text-base">
          I am a portrait and nature photographer primarily based in Rochester,
          NY, although I am in northern NJ for parts of the year.
        </p>
        <p className="text-[0.95rem] leading-relaxed text-neutral-700 sm:text-base">
          I primarily do outdoor photoshoots with natural lighting, but I also
          love doing creative shoots that experiment with different types of
          lighting. Feel free to reach out over Instagram or email if you are
          interested in working with me!
        </p>

        <div className="mt-7 border-y border-neutral-300 py-5">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
            Camera
          </p>
          <div className="mt-2 flex items-center gap-2 text-neutral-800">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 shrink-0"
            >
              <path d="M4 7h3l1.5-2h7L17 7h3a1 1 0 0 1 1 1v11H3V8a1 1 0 0 1 1-1Z" />
              <circle cx="12" cy="13" r="3.5" />
            </svg>
            <p className="text-base">Canon EOS R50</p>
          </div>
        </div>

        <div className="mt-7 flex items-center gap-6">
          <a
            aria-label="Instagram"
            className="group flex items-center gap-2 text-sm text-neutral-800 transition-colors hover:text-neutral-500"
            href="https://www.instagram.com/zzizz.jpg/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/icons/instagram_black.png"
              alt=""
              width={24}
              height={24}
              className="h-6 w-auto object-contain transition-opacity group-hover:opacity-50"
            />
            Instagram
          </a>
          <a
            className="group flex items-center gap-2 text-sm text-neutral-800 transition-colors hover:text-neutral-500"
            href="mailto:rizzo.zoej@gmail.com"
          >
            <Image
              src="/icons/email.png"
              alt=""
              width={24}
              height={24}
              className="h-6 w-auto object-contain transition-opacity group-hover:opacity-50"
            />
            Email
          </a>
        </div>
      </div>

    </section>
  );
}
