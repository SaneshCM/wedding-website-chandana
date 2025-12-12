import React from "react";

export default function JoinUsSection() {
  const images = [
    "/src/assets/joinus1.JPG",
    "/src/assets/joinus2.JPG",
    "/src/assets/joinus3.JPG",
    "/src/assets/joinus4.JPG",
  ];

  return (
    <section className="mb-16">
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {images.map((src, i) => (
            <div key={i} className="relative group">
              <img
                src={src}
                alt={`join-${i + 1}`}
                className="w-full h-40 md:h-60 object-cover rounded-md transform transition-transform duration-500 group-hover:scale-105 brightness-90"
              />
              {/* Optional subtle overlay on hover */}
              <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-30 transition-opacity rounded-md"></div>
            </div>
          ))}
        </div>

        {/* Centered text overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h2 className="text-white text-4xl md:text-6xl font-serif text-center px-4 py-2 bg-pink-500/25 rounded-lg drop-shadow-lg">
            Join Us
          </h2>
        </div>

        {/* Soft pink gradient overlay for romantic effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 via-transparent to-pink-500/30 z-10"></div>
      </div>
    </section>
  );
}
