"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "nav-blur bg-white/90 shadow-[0_1px_0_rgba(10,14,26,0.06)]"
            : "bg-transparent"
        }`}
      >
        {/* Top bar */}
        <div
          className={`text-center text-[11px] tracking-[0.2em] uppercase transition-all duration-500 ${
            scrolled
              ? "h-0 opacity-0 overflow-hidden"
              : "h-8 leading-8 bg-navy-950 text-sand-200"
          }`}
        >
          Free shipping on orders over €150 — Worldwide delivery
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left nav */}
            <div className="hidden lg:flex items-center gap-10">
              {["New", "Men", "Women", "Sailing", "Teams & Events"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`text-[12px] tracking-[0.15em] uppercase font-medium transition-colors duration-300 hover:text-gold ${
                    scrolled ? "text-navy-900" : "text-white"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 w-7"
            >
              <span
                className={`block h-[1.5px] transition-all duration-300 ${
                  menuOpen
                    ? "rotate-45 translate-y-[4.5px] bg-navy-950"
                    : scrolled
                    ? "bg-navy-950"
                    : "bg-white"
                }`}
                style={{ width: menuOpen ? "20px" : "24px" }}
              />
              <span
                className={`block h-[1.5px] w-4 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : scrolled ? "bg-navy-950" : "bg-white"
                }`}
              />
              <span
                className={`block h-[1.5px] transition-all duration-300 ${
                  menuOpen
                    ? "-rotate-45 -translate-y-[4.5px] bg-navy-950"
                    : scrolled
                    ? "bg-navy-950"
                    : "bg-white"
                }`}
                style={{ width: menuOpen ? "20px" : "16px" }}
              />
            </button>

            {/* Logo */}
            <a href="/" className="absolute left-1/2 -translate-x-1/2">
              <span
                className={`font-display text-2xl lg:text-[28px] font-bold tracking-[0.08em] transition-colors duration-500 ${
                  scrolled ? "text-navy-950" : "text-white"
                }`}
              >
                CODE-ZERO
              </span>
            </a>

            {/* Right nav */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className={`hidden lg:block text-[12px] tracking-[0.15em] uppercase font-medium transition-colors duration-300 hover:text-gold ${
                  scrolled ? "text-navy-900" : "text-white"
                }`}
              >
                About
              </a>
              {/* Search icon */}
              <button
                className={`transition-colors duration-300 ${
                  scrolled ? "text-navy-900" : "text-white"
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>
              {/* Cart */}
              <button
                className={`relative transition-colors duration-300 ${
                  scrolled ? "text-navy-900" : "text-white"
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: "80px" }}
      >
        <div className="px-8 py-6 space-y-1">
          {["New Collection", "Men", "Women", "Sailing Clothing", "Teams & Events", "About Us"].map(
            (item, i) => (
              <a
                key={item}
                href="#"
                className="block py-4 text-[15px] tracking-[0.12em] uppercase font-medium text-navy-900 border-b border-sand-100 hover:text-gold transition-colors"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateX(0)" : "translateX(-20px)",
                  transition: `all 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.06}s`,
                }}
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </>
  );
}
