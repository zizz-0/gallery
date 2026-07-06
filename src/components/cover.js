export default function Cover() {
  return (
    <div className="lg:h-[88vh] flex flex-col wrap justify-center items-center mt-[12vh]">
        <div className="relative items-center justify-center w-[90vw] h-[65vh] md:h-[80vh] overflow-hidden z-0 sm:mt-5">
            <img src="images/danger_sign.jpg" className="absolute inset-0 w-full h-full object-cover object-[40%_0%] md:object-[50%_35%] origin-[0%_100%] md:origin-[0%_100%] md:scale-120 top-10"/>

            <div className="absolute inset-0 z-10 flex flex-col justify-between md:p-8 top-10 md:top-30">
              <p className="p-4 w-[90vw] bg-[#000000]/30 md:bg-transparent text-center md:text-left text-[1.4em] md:text-2xl text-white [text-shadow:_-2px_2px_1px_#000000]" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>
                Rochester-based portrait & nature photographer
              </p>

              <div className="p-5 absolute inset-x-0 md:inset-auto top-[80%] md:top-[20%] flex w-full justify-center md:justify-normal md:items-center md:items-start gap-[5vw] md:gap-4">
                <a href="/about-me" className="p-3 bg-white/90 text-gray-600 rounded text-lg md:text-xl w-36 text-center inline-block hover:bg-[#96ab93]" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>About Me</a>
                <a href="mailto: rizzo.zoej@gmail.com" className="p-3 bg-white/90 text-gray-600 rounded text-lg md:text-xl w-36 text-center inline-block hover:bg-[#96ab93]" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>Contact me</a>
              </div>
            </div>
        </div>
    </div>
  );
}