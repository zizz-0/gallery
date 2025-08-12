export default function Header() {
  return (
    <div className="flex items-center justify-between py-8 relative">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden items-center fixed top-10 right-8 z-50">
          <input
            type="checkbox"
            id="menu-toggle"
            className="hidden peer"
          />

          <label htmlFor="menu-toggle" className="HAMBURGER-ICON space-y-2 cursor-pointer">
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
          </label>

          <div className="hidden peer-checked:flex fixed inset-0 bg-white z-10 flex-col justify-center items-center">
            <label
              htmlFor="menu-toggle"
              className="absolute top-8 right-8 cursor-pointer"
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </label>

            <ul className="flex flex-col pl-[5vw] justify-center w-[100vw] h-[100vh] bg-[#4f694a]">
              <li className="text-2xl underline my-8 p-4 w-[70vw]">
                <a href="/">Home</a>
              </li>
              <li className="text-2xl underline my-8 p-4 w-[70vw]">
                <a href="/gallery">Gallery</a>
              </li>
              <li className="text-2xl underline my-8 p-4 w-[70vw]">
                <a  href="https://www.instagram.com/zizz.photography/" target="_blank">Instagram</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-5 lg:flex w-[70vw] justify-end">
          <li>
            <a href="/" className="mx-4 mr-2 text-2xl underline" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>Home</a>
          </li>
          <li>
            <a href="/gallery" className="mx-4 mr-2 text-2xl underline" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>Gallery</a>
          </li>
          <li>
            <a href="https://www.instagram.com/zizz.photography/" target="_blank">
                <img src="icons/instagram.png" width={35} height={35}/>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}