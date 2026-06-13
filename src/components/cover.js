import Image from 'next/image';

export default function Cover() {
  return (
    <div className="lg:h-[88vh] flex flex-col wrap justify-center items-center mt-[12vh]">
        <div className="sm:relative mb-[30px] mt-[10px] md:mt-0 md:absolute md:top-50 md:left-35 flex flex-col p-5 md:p-8 w-[80vw] md:w-[30vw] bg-[#374a34]/70 rounded">
            <p className="text-lg mb-2 md:text-xl text-white" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>Hi I'm Zoe, a software engineering student with a very expensive hobby.</p>
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
        <img src="images/me.jpg" className="w-[80vw] md:w-[90vw] h-[30vh] md:h-[80vh] object-cover object-bottom md:object-[15%_85%] overflow-hidden"></img>
    </div>
  );
}