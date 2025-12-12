import React from "react";

const VenueCard = ({ title, time, address, mapLink, image }) => (
  <div className="relative rounded-2xl overflow-hidden shadow-lg group">
    {/* Background Image */}
    <div
      className="h-60 md:h-72 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Pink overlay */}
      <div className="absolute inset-0 bg-pink-400/20"></div>

      {/* Glass text overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg inline-block text-center">
          <h3 className="text-xl md:text-2xl font-serif text-gray-900">{title}</h3>
          <p className="text-sm md:text-base text-gray-800 mt-1">{time}</p>
          <p className="text-sm md:text-base text-gray-800 mt-1">{address}</p>
          <a
            href={mapLink}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-sm underline text-pink-600 hover:text-pink-400 transition-colors"
          >
            Get directions
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default function VenueSection() {
  return (
    <section className="mb-12" id="venues">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-pink-600">Wedding & Reception</h2>
        <p className="mt-2 text-gray-700 md:text-lg">
          Celebrate with us at these special locations
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <VenueCard
          title="Wedding Ceremony"
          time="12:00 PM - 12:30 PM Muhurtham"
          address="Ayodhya Auditorium, Payyanur"
          mapLink="https://maps.app.goo.gl/YV5RMy5YzKGfZFuU9"
          image="/assets/wedding-1.JPG"
        />
        <VenueCard
          title="Reception"
          time="5:30 PM - 9:00 PM"
          address="Al Saj Comet, Kazhakoottam Vadakkumbhagam, Thiruvananthapuram"
          mapLink="https://maps.app.goo.gl/f7Ac5oUMzhF5YsSy8"
          image="/assets/reception.JPG"
        />
      </div>
    </section>
  );
}
