import Image from "next/image";

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-6 w-6"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export default function Header({ title, overlay = false, light = false }) {
  return (
    <header
      className={`w-full px-4 py-5 sm:px-6 sm:py-6 md:px-8 ${
        light ? "text-[#171717]" : "text-white"
      } ${
        overlay ? "absolute inset-x-0 top-0 z-30" : ""
      }`}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 items-center gap-x-3 gap-y-3 md:grid-cols-3 md:gap-x-8">
        <nav
          aria-label="Main navigation"
          className="order-2 flex w-full items-center justify-evenly gap-4 text-xs uppercase tracking-[0.12em] sm:gap-6 sm:text-sm md:order-1"
        >
          <a className="transition-opacity hover:opacity-70" href="/">Home</a>
          <a className="transition-opacity hover:opacity-70" href="/about-me">About</a>
          <a className="transition-opacity hover:opacity-70" href="/gallery">Gallery</a>
        </nav>

        <div className="col-span-2 order-1 flex h-[100px] items-center justify-center md:col-span-1 md:order-2">
          {title === "Zoe Rizzo Photography" ? (
            <h1>
              <Image
                src={
                  light
                    ? "/icons/photography_black.png"
                    : "/icons/photography_white.png"
                }
                alt={title}
                width={3000}
                height={1000}
                priority
                className="h-[100px] w-auto max-w-full"
              />
            </h1>
          ) : (
            <h1 className="text-center text-base font-light uppercase tracking-[0.12em] sm:text-lg md:text-2xl">
              {title}
            </h1>
          )}
        </div>

        <div className="order-3 flex w-full items-center justify-end gap-4 text-xs uppercase tracking-[0.12em] sm:gap-6 sm:text-sm">
          <nav aria-label="More navigation" className="flex flex-1 items-center justify-evenly">
            <a className="transition-opacity hover:opacity-70" href="/testimonials">Testimonials</a>
            <a className="transition-opacity hover:opacity-70" href="/inquiries">Inquiries</a>
          </nav>
          <div className="flex items-center gap-4 sm:gap-5">
            <a
              aria-label="Instagram"
              className="transition-opacity hover:opacity-70"
              href="https://www.instagram.com/zzizz.jpg/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              aria-label="Email"
              className="transition-opacity hover:opacity-70"
              href="mailto:rizzo.zoej@gmail.com"
            >
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
