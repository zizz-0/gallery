import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className="lg:h-[88vh] flex flex-col wrap justify-center items-center mt-[12vh]">
        <div className="relative w-[80vw] md:w-[90vw] h-[20vh] md:h-[80vh] overflow-hidden z-0 mt-5 sm:mt-5">
            <img src="images/me.jpg" className="absolute inset-0 w-full h-full object-cover object-bottom md:object-[50%_70%] md:origin-[0%_100%] md:scale-120"></img>
        </div>
        <div className="sm:relative mb-[30px] mt-[10px] md:mt-0 md:absolute md:top-40 md:left-35 flex flex-col p-5 md:p-8 w-[80vw] md:w-[30vw] md:bg-[#40593D]/70 bg-[#374a34]/70 rounded relative z-10">
            <p className="text-lg mb-2 md:text-xl text-white" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>Hello, I'm Zoe!</p>
            <p className="text-lg mb-2 md:text-xl text-white" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>I am a portrait and nature photographer based in Rochester, NY, although I am in northern NJ for parts of the year.</p>
            <p className="text-lg mb-2 md:text-xl text-white" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>I primarily shoot portraits and life events — proms, graduations, proposals — but also care a great deal for nature photography. I capture photos authentically and edit true-to-life.</p>
            <div className="flex gap-2 pt-4 items-center">
              <Image
                src={"icons/camera_white.png"}
                alt={"camera symbol"}
                width={35}
                height={35}
              />
              <p className="text-lg md:text-xl text-white" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>Canon EOS R50</p>
            </div>
            <a href="mailto: rizzo.zoej@gmail.com" className="mt-6 p-3 bg-white/90 text-gray-600 rounded text-lg md:text-xl w-auto inline-block self-start" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>Contact me</a>
        </div>
        {/* TODO: add more info */}
    </div>
  );
}