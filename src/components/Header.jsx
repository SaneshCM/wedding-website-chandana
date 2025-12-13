import React, { useEffect, useRef, useState } from "react";

const NavLink = ({ to, children, external, mobile, onClick }) => {
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
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <a href={to} className={baseClass} onClick={onClick}>
      {children}
    </a>
  );
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-200 to-pink-400 flex items-center justify-center text-pink-800 font-bold text-lg">
            C&A
          </div>
          <div className="leading-tight">
            <div className="font-serif text-lg">Chandana & Anandhu</div>
            <div className="text-xs text-gray-500">December 25, 2025</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="#/">Home</NavLink>
          <NavLink to="https://drive.google.com/drive/folders/1-E6ypwy_YNEsHeABLwShLicqzkXMH-u8" external>
            Photo Gallery
          </NavLink>
          <NavLink to="#/us">Us</NavLink>
        </nav>

        {/* Mobile Nav */}
        <div ref={menuRef} className="md:hidden relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-white border shadow-sm text-sm font-medium"
          >
            {/* Hamburger */}
            <span className="relative w-4 h-4">
              <span
                className={`absolute left-0 top-1/2 w-full h-0.5 bg-gray-700 transition-transform ${
                  menuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 w-full h-0.5 bg-gray-700 transition-opacity ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 w-full h-0.5 bg-gray-700 transition-transform ${
                  menuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </span>

            Menu

            {/* Arrow */}
            <svg
              className={`w-4 h-4 transition-transform ${
                menuOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown */}
          <div
            className={`absolute right-0 mt-2 w-44 bg-white border rounded-xl shadow-lg p-2
              transform transition-all duration-200 origin-top
              ${menuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
            `}
          >
            <NavLink to="#/" mobile onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink
              to="https://drive.google.com/drive/folders/1-E6ypwy_YNEsHeABLwShLicqzkXMH-u8"
              external
              mobile
              onClick={closeMenu}
            >
              Photo Gallery
            </NavLink>

            <NavLink to="#/us" mobile onClick={closeMenu}>
              Us
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}




// https://drive.google.com/drive/folders/1-E6ypwy_YNEsHeABLwShLicqzkXMH-u8
