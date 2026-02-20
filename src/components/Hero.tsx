"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden grain">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1920&q=80"
          alt="Sailing lifestyle"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/30 to-navy-950/70" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 lg:pb-28 px-6 lg:px-16">
        <div className="max-w-[1440px] mx-auto w-full">
          {/* Season tag */}
          <div
            className="mb-6"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
            }}
          >
            <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold-light border border-gold-light/30 px-4 py-1.5">
              Spring / Summer 2026
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-white leading-[0.95]"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(40px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
            }}
          >
            <span className="block text-5xl sm:text-7xl lg:text-8xl xl:text-[108px] font-light italic">
              Born on
            </span>
            <span className="block text-5xl sm:text-7xl lg:text-8xl xl:text-[108px] font-bold mt-1 lg:mt-2">
              the Water
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="mt-6 lg:mt-8 text-sand-200 text-sm lg:text-base max-w-md leading-relaxed tracking-wide"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s",
            }}
          >
            Performance styles crafted for those who live between the wind and the waves.
            Discover the new collection.
          </p>

          {/* CTAs */}
          <div
            className="mt-8 lg:mt-10 flex flex-wrap gap-4"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1s",
            }}
          >
            <a
              href="#"
              className="group inline-flex items-center gap-3 bg-white text-navy-950 px-8 py-4 text-[12px] tracking-[0.2em] uppercase font-semibold hover:bg-gold hover:text-white transition-all duration-400"
            >
              Shop Men
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-3 border border-white/40 text-white px-8 py-4 text-[12px] tracking-[0.2em] uppercase font-semibold hover:bg-white/10 hover:border-white transition-all duration-400"
            >
              Shop Women
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease 1.5s",
        }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">Scroll</span>
        <div className="w-[1px] h-8 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white/60 animate-[scrollDown_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollDown {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
