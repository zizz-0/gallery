import Image from 'next/image';

export default function ScrollHighlights({ photos }) {
    return (
        <div className="">
            <div className="">
                {photos.map((photo) => (
                    <Image
                        src={photo.url}
                        alt={photo.caption}
                        fill
                        sizes="(max-width: 640px) 100w, 300px"
                        className="rounded shadow border-solid border-2"
                    />
                ))}
            </div>
        </div>
    );
}