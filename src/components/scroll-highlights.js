export default function ScrollHighlights({ photos }) {
  const highlights = photos.filter(p => p.highlight === "y");

  return (
    <div className="w-[full] min-h-screen mt-[12vh]">
      <div className="flex flex-wrap gap-0">
        {highlights.map((photo) => (
          <div
            key={photo.id}
            className="
              overflow-hidden flex-grow
              w-screen h-auto max-h-[88vh]
              sm:min-w-[30vw] sm:h-[88vh] sm:w-auto
            "
          >
            <img
              src={photo.fullSizeUrl}
              alt={photo.caption}
              className="w-full h-full object-cover border-solid border-3"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center p-5">
        <h2 className="text-xl text-gray-600" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>View more photos in my <a href="/gallery" className="underline">gallery</a></h2>
      </div>
    </div>
  );
}