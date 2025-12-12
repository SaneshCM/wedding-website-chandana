import React from "react";
import Slideshow from "../components/Slideshow";
import CountdownTimer from "../components/CountdownTimer";
import VenueSection from "../components/VenueSection";
import JoinUsSection from "../components/JoinUsSection";
// import GalleryPreview from "./PhotoGallery?preview"; // we will support preview mode

/**
 * Landing page composes slideshow, countdown, venues, gallery preview and join-us.
 */
const slides = [
  { src: "/src/assets/1_updated.JPG", alt: "hero-1" },
  { src: "/src/assets/2_updated.JPG", alt: "hero-2" },
  { src: "/src/assets/3_updated.JPG", alt: "hero-3" },
];

export default function LandingPage() {
  return (
    <div>
      <Slideshow images={slides} />
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
  <div className="col-span-1 lg:col-span-3 space-y-6">
    <CountdownTimer targetDate="2025-12-25T12:00:00+05:30" />
    <VenueSection />
  </div>
</div>


      <div className="mt-8">
        <JoinUsSection />
      </div>
    </div>
  );
}
