export default function ScrollHighlights({ photos }) {
    const highlights = photos.filter(photo => photo.highlight === 'y');

    return (
        <div className="w-full h-full bg-white overflow-x-auto mt-[12vh]">
            <div className="flex flex-row gap-1 p-4">
                {highlights.map((photo) => (
                    <div key={photo.id} className="relative h-[300px] min-w-[200px] flex-shrink-0">
                        <img
                        src={photo.fullSizeUrl}
                        alt={photo.caption}
                        style={{ height: '300px', width: 'auto' }}
                        className="rounded"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}