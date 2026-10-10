"use client";

import Image from "next/image";
import { useState } from "react";

export default function Slider({
  firstImage,
  secondImage,
  firstImageAlt = "",
  secondImageAlt = "",
  aspectRatio = "4 / 3",
  className = "",
}) {
  const [position, setPosition] = useState(30);

  return (
    <div
      className={`relative overflow-hidden focus-within:ring-2 focus-within:ring-inset focus-within:ring-white ${className}`}
      style={{ aspectRatio }} // isolate?
    >
      <div className="absolute top-0 left-0 z-10 flex w-full justify-between p-4 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
        <p className="text-lg mb-2 md:text-xl text-pink" style={{fontFamily: 'Trebuchet MS, sans-serif'}}> Before</p>
        <p className="text-lg mb-2 md:text-xl text-pink" style={{fontFamily: 'Trebuchet MS, sans-serif'}}>After</p>
      </div>
      <Image
        src={secondImage}
        alt={secondImageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 80vw"
        className="pointer-events-none object-cover"
        draggable={false}
      />
      <Image
        src={firstImage}
        alt={firstImageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 80vw"
        className="pointer-events-none object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_4px_rgba(0,0,0,0.8)]"
        style={{ left: `${position}%` }}
      >
        <span className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-black/40 text-xl leading-none text-white shadow">
          ↔
        </span>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label="Image comparison position"
        aria-valuetext={`${position}% of the first image visible on the left`}
        className="absolute inset-0 z-20 m-0 h-full w-full cursor-ew-resize opacity-0 [touch-action:pan-y]"
      />
    </div>
  );
}
