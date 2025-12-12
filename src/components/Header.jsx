import React from "react";

const NavLink = ({ to, children, external, mobile }) => {
  // Apply block style for mobile if needed
  const baseClass = mobile
    ? "block w-full px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-white hover:bg-pink-500 transition"
    : "px-3 py-1 rounded-md text-sm font-medium text-gray-700 hover:text-white hover:bg-pink-500 transition";

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
      >
        {children}
      </a>
    );
  }

  return (
    <a href={to} className={baseClass}>
      {children}
    </a>
  );
};

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-200 to-pink-400 flex items-center justify-center text-pink-800 font-bold text-lg">
            C&A
          </div>
          <div className="leading-tight">
            <div className="font-serif text-lg">Chandana & Anandhu</div>
            <div className="text-xs text-gray-500">December 25, 2025</div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="#/">Home</NavLink>
          <NavLink to="https://drive.google.com/drive/folders/1-E6ypwy_YNEsHeABLwShLicqzkXMH-u8" external>
            Photo Gallery
          </NavLink>
          {/* <NavLink to="#/upload">Upload Photo</NavLink> */}
          <NavLink to="#/us">Us</NavLink>
        </nav>

        {/* Mobile menu */}
        <div className="md:hidden relative">
          <details className="relative">
            <summary className="cursor-pointer px-3 py-2 rounded-md bg-white border shadow-sm">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg flex flex-col p-2">
              <NavLink to="#/" mobile>
                Home
              </NavLink>
              <NavLink to="https://drive.google.com/drive/folders/1-E6ypwy_YNEsHeABLwShLicqzkXMH-u8" external mobile>
                Photo Gallery
              </NavLink>
              {/* <NavLink to="#/upload" mobile>Upload Photo</NavLink> */}
              <NavLink to="#/us" mobile>
                Us
              </NavLink>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
