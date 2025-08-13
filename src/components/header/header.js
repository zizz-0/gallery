export default function Header({title}) {
  return (
    <div className="flex items-center justify-between py-8 relative">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden items-center">
          <input
            type="checkbox"
            id="menu-toggle"
            className="hidden peer"
          />

          <div className="flex items-center w-[100vw]">
            <h1 className="text-3xl p-5 pr-[70px]" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>{title}</h1>

            <label htmlFor="menu-toggle" className="HAMBURGER-ICON space-y-2 cursor-pointer fixed top-9 right-4">
              <span className="block h-0.5 w-8 bg-white"></span>
              <span className="block h-0.5 w-8 bg-white"></span>
              <span className="block h-0.5 w-8 bg-white"></span>
            </label>
          </div>


          <div className="hidden peer-checked:flex fixed inset-0 bg-white">
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
                <a href="/gallery/">Home</a>
              </li>
              <li className="text-2xl underline my-8 p-4 w-[70vw]">
                <a href="/gallery/gallery">Gallery</a>
              </li>
              <li className="text-2xl underline my-8 p-4 w-[70vw]">
                <a  href="https://www.instagram.com/zizz.photography/" target="_blank">Instagram</a>
              </li>
            </ul>
          </div>
        </section>

        <div className="flex items-center w-[100vw] justify-between">
          <h1 className="hidden text-3xl p-5 pr-[70px] lg:flex" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>{title}</h1>
          <ul className="DESKTOP-MENU hidden space-x-5 lg:flex mr-[20px]">
            <li>
              <a href="/gallery/" className="mx-4 mr-2 text-2xl underline" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>Home</a>
            </li>
            <li>
              <a href="/gallery/gallery" className="mx-4 mr-2 text-2xl underline" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>Gallery</a>
            </li>
            <li>
              <a href="https://www.instagram.com/zizz.photography/" target="_blank">
                  <img src="icons/instagram.png" width={35} height={35}/>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}