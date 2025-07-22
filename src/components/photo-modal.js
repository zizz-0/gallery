import Image from 'next/image';

export default function PhotoModal({ photo, onClose, onPrev, onNext }) {
  return (
    /* TODO: header banner stays on top of modal */ 
    <div className="bg-white/70 fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-lg relative flex flex-row items-center justify-between gap-5 h-9/10 w-9/10">

        <button
        /* TODO: add padding, maybe make bigger */
          onClick={onPrev}
          className="text-gray-600 hover:text-[#6d8dc2] text-7xl cursor-pointer"
        >
          &#8249;
        </button>

        <div className="flex flex-row items-center gap-5">
          {/* TODO: make landscape images larger */}
          <Image
            src={photo.fullSizeUrl}
            alt={photo.caption}
            width={600}
            height={400}
            className="rounded object-contain max-h-[80vh] max-w-[80vw]"
          />

          {/* TODO: gray background for info box (maybe)
            * TODO: add location and date
            * TODO: fix font size */}
          <div className="py-5 self-start">
            <h2 className="text-[#4a638c] font-semibold text-xl">{photo.caption}</h2>
            <p className="text-gray-600 text-lg ">{photo.cameraSettings}</p>
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
          className="absolute top-2 right-2 text-gray-600 hover:text-[#6d8dc2] cursor-pointer font-bold text-2xl"
        >
          &#66327;
        </button>

      </div>
    </div>
  );
}