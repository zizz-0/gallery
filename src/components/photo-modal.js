import Image from 'next/image';
import { useState, useRef } from 'react';

export default function PhotoModal({ photo, onClose, onPrev, onNext }) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0 });
  const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  const magnifierSize = 300;
  const [zoom, setZoom] = useState(2);

  function handleMouseMove(e) {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > rect.width) x = rect.width;
    if (y > rect.height) y = rect.height;

    setMagnifierPos({ x, y });
  }

  function getDisplayedImageSize() {
    if (!containerRef.current) return { width: 0, height: 0 };
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;
    const naturalRatio = naturalSize.width / naturalSize.height;
    const containerRatio = containerWidth / containerHeight;

    let displayedWidth, displayedHeight;

    if (containerRatio > naturalRatio) {
      displayedHeight = containerHeight;
      displayedWidth = naturalRatio * displayedHeight;
    } else {
      displayedWidth = containerWidth;
      displayedHeight = displayedWidth / naturalRatio;
    }

    return { displayedWidth, displayedHeight };
  }

  const { displayedWidth, displayedHeight } = getDisplayedImageSize();

  return (
    <div className="bg-white/70 fixed top-[10vh] left-0 right-0 bottom-0 flex items-center justify-center z-40">
      <div className="overflow-y-auto bg-white p-4 rounded shadow-lg relative flex flex-row items-center justify-between gap-5 h-full w-full sm:h-9/10 sm:w-9/10">

        <button
          onClick={onPrev}
          className="text-gray-600 hover:text-[#6d8dc2] text-7xl cursor-pointer"
        >
          &#8249;
        </button>

        <div className={`flex flex-col md:flex-row items-start gap-0 md:gap-5 sm:mt-0 ${
              photo.orientation === "landscape"
                ? "mt-0"
                : "mt-45"
            }`}>
          <div
            ref={containerRef}
            className={`relative rounded cursor-crosshair ${
              photo.orientation === "landscape"
                ? "w-full h-[35vh] md:w-[55vw] md:h-[65vh]"
                : "w-full h-[60vh] md:w-[30vw] md:h-[70vh]"
            }`}
            onMouseEnter={() => setShowMagnifier(true)}
            onMouseLeave={() => setShowMagnifier(false)}
            onMouseMove={handleMouseMove}
          >
            <Image
              src={photo.fullSizeUrl}
              alt={photo.caption}
              fill
              className="object-contain max-h-full rounded"
              onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                setNaturalSize({ width: naturalWidth, height: naturalHeight })
              }
            />

            {showMagnifier && naturalSize.width > 0 && (
              <div
                style={{
                  position: 'absolute',
                  pointerEvents: 'none',
                  top: magnifierPos.y - magnifierSize / 2,
                  left: magnifierPos.x - magnifierSize / 2,
                  width: magnifierSize,
                  height: magnifierSize,
                  borderRadius: '5%',
                  boxShadow: '0 0 8px 2px rgba(0,0,0,0.3)',
                  backgroundColor: 'white',
                  backgroundImage: `url(${photo.fullSizeUrl})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: `${displayedWidth * zoom}px ${displayedHeight * zoom}px`,
                  backgroundPositionX: `${-(magnifierPos.x - (containerRef.current.offsetWidth - displayedWidth) / 2) *
                      zoom + magnifierSize / 2}px`,
                  backgroundPositionY: `${-(magnifierPos.y - (containerRef.current.offsetHeight - displayedHeight) / 2) *
                      zoom + magnifierSize / 2}px`,
                  border: '2px solid #6d8dc2',
                }}
              />
            )}
          </div>

          <div className={`p-5 bg-gray-200 w-full ${
              photo.orientation === "landscape"
                ? "w-full h-[35vh] md:w-[25vw] h-auto md:h-[65vh]"
                : "w-full h-[60vh] md:w-[25vw]  h-auto md:h-[70vh]"
            }`}
            style={{fontFamily: 'Trebuchet MS, sans-serif'}}>
            <div className="pb-5">
              <p className="text-gray-600 text-xl md:text-2xl 3xl:text-3xl">{photo.date}</p>
              <p className="text-gray-600 text-xl md:text-2xl 3xl:text-3xl">{photo.location}</p>
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
                <p className="text-gray-600 text-lg md:text-xl">{photo.camera}</p>
              </div>
              <div className="flex gap-2 pb-4 items-center">
                <Image
                  src={"/icons/lens.png"}
                  alt={"Lens symbol"}
                  width={35}
                  height={35}
                />
                <p className="text-gray-600 text-lg md:text-xl">{photo.lens}</p>
              </div>

              <div className="flex flex-row sm:flex-col gap-7 sm:gap-0">
                <div className="flex gap-2 pb-4 items-center">
                  <Image
                    src={"/icons/aperture.png"}
                    alt={"Aperture symbol"}
                    width={35}
                    height={35}
                  />
                  <p className="text-gray-600 text-lg md:text-xl">{photo.fstop}</p>
                </div>
                <div className="flex gap-2 pb-4 items-center">
                  <Image
                    src={"/icons/shutterspeed.png"}
                    alt={"Shutter speed symbol"}
                    width={35}
                    height={35}
                  />
                  <p className="text-gray-600 text-lg md:text-xl">{photo.shutter}</p>
                </div>
              </div>
              
              <div className="flex flex-row sm:flex-col gap-7 sm:gap-0">
                <div className="flex gap-2 pb-4 items-center">
                  <Image
                    src={"/icons/iso.png"}
                    alt={"Iso symbol"}
                    width={35}
                    height={35}
                  />
                  <p className="text-gray-600 text-lg md:text-xl">{photo.iso}</p>
                </div>
                <div className="flex gap-2 pb-4 items-center">
                  <Image
                    src={"/icons/flash.png"}
                    alt={"Flash symbol"}
                    width={35}
                    height={35}
                  />
                  <p className="text-gray-600 text-lg md:text-xl">{photo.flash}</p>
                </div>
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

        <div className="absolute top-5 sm:top-4 right-4 flex items-center gap-2">
          <label htmlFor="zoom-select" className="text-gray-600 text-lg invisible sm:visible" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>Zoom:</label>
          <select
            id="zoom-select"
            className="border border-gray-300 rounded px-3 py-1 text-md mr-4 text-gray-700 bg-white invisible sm:visible"
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
          >
            <option value={1}>1x</option>
            <option value={2}>2x</option>
            <option value={3}>3x</option>
            <option value={4}>4x</option>
          </select>

          <button
            onClick={onClose}
            className="text-gray-600 hover:text-[#6d8dc2] cursor-pointer font-bold text-3xl"
          >
            &#66327;
          </button>
        </div>

      </div>
    </div>
  );
}
