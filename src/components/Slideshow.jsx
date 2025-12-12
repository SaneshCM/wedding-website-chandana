import React, { useEffect, useState } from "react";

/**
 * Lightweight slideshow that cycles images every 5s with slide fade effect.
 * Accepts images: array of { src, alt }.
 */
export default function Slideshow({ images = [], interval = 5000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval
    );
    return () => clearInterval(t);
  }, [images.length, interval]);

  if (!images.length) return null;

  return (
    <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
      {/* Slideshow Images */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt || `slide-${i}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out transform ${
            i === index
              ? "opacity-100 translate-x-0 z-10"
              : "opacity-0 -translate-x-4 -z-0"
          }`}
          loading="lazy"
        />
      ))}

      {/* Pinkish overlay */}
      <div className="absolute inset-0 bg-pink-300/30 z-15"></div>

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-serif text-white drop-shadow-lg">
            Chandana & Anandhu
          </h1>
          <p className="mt-2 text-sm md:text-lg text-white drop-shadow-md">
            We invite you to celebrate with us — December 25, 2025
          </p>
        </div>
      </div>
    </div>
  );
}
