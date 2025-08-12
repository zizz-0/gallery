export default function Cover() {
  return (
    <div className="h-[88vh] flex flex-col wrap justify-center items-center mt-[12vh]">
        <div className="sm:relative mb-[30px] md:mt-0 md:absolute md:top-50 md:left-35 flex flex-col p-5 md:p-8 w-[80vw] md:w-[30vw] bg-[#374a34]/70 rounded">
            <h2 className="text-xl md:text-2xl text-white mb-3" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>About me</h2>
            <p className="text-lg md:text-xl text-white" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>Hi! I'm Zoe, a fourth year student at Rochester Institute of Technology. I am a software engineering major, but have always enjoyed photography as a hobby.</p>
            <a href="mailto: rizzo.zoej@gmail.com" className="underline mt-6 p-3 bg-white/90 text-gray-600 rounded text-lg md:text-xl w-auto inline-block self-start" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>Contact me</a>
        </div>
        <img src="images/me.jpg" className="w-[80vw] md:w-[90vw] h-[45vh] md:h-[80vh] object-cover object-bottom md:object-[15%_85%] overflow-hidden"></img>
    </div>
  );
}