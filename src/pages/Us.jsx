import React from "react";

export default function Us() {
  return (
    <section className="relative mb-16">
      {/* Soft background */}
      <div className="absolute inset-0 bg-pink-100/20"></div>

      {/* Glass panel container */}
      <div className="relative max-w-4xl mx-auto bg-white/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
        <h1 className="text-3xl md:text-5xl font-serif text-pink-600 text-center mb-6 drop-shadow-lg">
          About Us
        </h1>

        <p className="text-gray-800 text-center md:text-lg mb-6">
          We are thrilled to share our special day with you. <br/>
          {/* Please join us on{" "}
          <span className="font-semibold">December 25, 2025</span> at <span className="font-semibold">Ayodhya Auditorium
          Payyanur.</span> */}
        </p>

        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-pink-500 mb-3">
            Contact
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            For any questions, contact us. <br /> <br />
            Groom <br />
            Anandhu MB <br />
            Phone : 8971973836 <br />
            <br /> <br />
            Bride <br />
            Chandana Krishnan <br />
            Phone : 8606282903 <br />
          </p>
        </div>
      </div>
    </section>
  );
}
