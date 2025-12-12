import React, { useEffect, useState } from "react";

/**
 * Countdown to targetDate (ISO string).
 * When finished, shows an "Upload Photo" CTA.
 */
export default function CountdownTimer({ targetDate = "2025-12-25T12:00:00+05:30" }) {
  const target = new Date(targetDate).getTime();
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const ms = Math.max(0, target - now);
  const s = Math.floor(ms / 1000);
  const days = Math.floor(s / 86400);
  const hours = Math.floor((s % 86400) / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;
  const ended = ms === 0;

  return (
    <div className="relative bg-pink-100/30 backdrop-blur-sm rounded-3xl shadow-lg p-6 md:p-10 text-center max-w-3xl mx-auto">
      <div className="text-gray-700 uppercase tracking-wide text-sm mb-4">Countdown to the Wedding</div>

      <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
        <TimeBox label="Days" value={days} />
        <TimeBox label="Hours" value={hours} />
        <TimeBox label="Minutes" value={minutes} />
        <TimeBox label="Seconds" value={seconds} />
      </div>

      {ended && (
        <div className="mt-6">
          <a
            href="https://drive.google.com/drive/folders/1-E6ypwy_YNEsHeABLwShLicqzkXMH-u8" target="_blank"
            className="inline-block px-6 py-3 bg-pink-600 hover:bg-pink-500 text-white rounded-xl font-semibold shadow-md transition-colors"
          >
            Upload Photo
          </a>
        </div>
      )}
    </div>
  );
}

const TimeBox = ({ label, value }) => (
  <div className="w-20 md:w-24 bg-white/40 backdrop-blur-sm rounded-xl p-3 md:p-4 flex flex-col items-center justify-center shadow-md transition-transform transform hover:scale-105">
    <div className="text-2xl md:text-3xl font-serif font-semibold text-pink-700">
      {String(value).padStart(2, "0")}
    </div>
    <div className="text-xs md:text-sm text-gray-600 mt-1 uppercase tracking-wider">{label}</div>
  </div>
);
