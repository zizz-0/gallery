import Image from 'next/image';

export default function PhotoModal({ photo, onClose, onPrev, onNext }) {
  const isLandscape = photo.orientation == "landscape" ? true : false;
  return (
    <div className="bg-white/70 fixed top-[10vh] left-0 right-0 bottom-0 flex items-center justify-center z-40">
      <div className="bg-white p-4 rounded shadow-lg relative flex flex-row items-center justify-between gap-5 h-9/10 w-9/10">

        <button
          onClick={onPrev}
          className="text-gray-600 hover:text-[#6d8dc2] text-7xl cursor-pointer"
        >
          &#8249;
        </button>

        <div className="flex flex-row items-center gap-0">
          {/* magnifying zoom box on hover? */}
          <div className={`relative rounded ${isLandscape ? 'w-[55vw] h-[70vh]' : 'w-[30vw] h-[70vh]'}`}>
            <Image
              src={photo.fullSizeUrl}
              alt={photo.caption}
              fill
              className="object-contain rounded"
            />
          </div>

          {/* TODO: style date and location 
            * TODO: maybe make info box extend full height
            * TODO: play around with info box width (make wider) */}
          <div className="p-5 self-start bg-gray-200 w-[25vw] h-[70vh]" style={{ fontFamily: 'Trebuchet MS, sans-serif' }}>
            <div className="pb-5">
              <p className="text-gray-600 text-xl">{photo.date}</p>
              <p className="text-gray-600 text-xl">{photo.location}</p>
            </div>
            <hr className="border-solid border-1 border-[#4a638c]"></hr>
            <div>
              <div className="flex gap-2 pb-4 pt-5 items-center">
                <Image
                  src={"/icons/camera.png"}
                  alt={"Camera symbol"}
                  width={35}
                  height={3}
                />
                <p className="text-gray-600 text-lg">{photo.camera}</p>
              </div>
              <div className="flex gap-2 pb-4 items-center">
                <Image
                  src={"/icons/lens.png"}
                  alt={"Lens symbol"}
                  width={35}
                  height={35}
                />
                <p className="text-gray-600 text-lg">{photo.lens}</p>
              </div>
              <div className="flex gap-2 pb-4 items-center">
                <Image
                  src={"/icons/aperture.png"}
                  alt={"Aperture symbol"}
                  width={35}
                  height={35}
                />
                <p className="text-gray-600 text-lg">{photo.fstop}</p>
              </div>
              <div className="flex gap-2 pb-4 items-center">
                <Image
                  src={"/icons/shutterspeed.png"}
                  alt={"Shutter speed symbol"}
                  width={35}
                  height={35}
                />
                <p className="text-gray-600 text-lg">{photo.shutter}</p>
              </div>
              <div className="flex gap-2 pb-4 items-center">
                <Image
                  src={"/icons/iso.png"}
                  alt={"Iso symbol"}
                  width={35}
                  height={35}
                />
                <p className="text-gray-600 text-lg">{photo.iso}</p>
              </div>
              <div className="flex gap-2 pb-4 items-center">
                <Image
                  src={"/icons/flash.png"}
                  alt={"Flash symbol"}
                  width={35}
                  height={35}
                />
                <p className="text-gray-600 text-lg">{photo.flash}</p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={onNext}
          className="text-gray-600 hover:text-[#6d8dc2] text-7xl cursor-pointer"
        >
          &#8250;
        </button>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-[#6d8dc2] cursor-pointer font-bold text-3xl"
        >
          &#66327;
        </button>

      </div>
    </div>
  );
}