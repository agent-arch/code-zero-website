export default function LifestyleSection() {
  return (
    <section className="relative py-0">
      {/* Full-width image with overlay */}
      <div className="relative h-[70vh] lg:h-[85vh] overflow-hidden">
        <img
          src="https://www.code-zero.com/uploads/media/cf/39/d1/1665400354/code-zero-sailing-clothing.jpg?ts=1756126269"
          alt="CODE-ZERO Sailing Lifestyle"
          className="w-full h-full object-cover parallax-slow"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-navy-950/30 to-transparent" />
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center px-6 lg:px-16">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="max-w-lg">
              <span className="fade-up text-[11px] tracking-[0.3em] uppercase text-gold-light font-medium block mb-4">
                Sailing Collection
              </span>
              <h2 className="fade-up stagger-1 font-display text-4xl lg:text-6xl xl:text-7xl text-white font-light leading-[1.05]">
                Crafted for <br />
                <span className="italic">the Open Sea</span>
              </h2>
              <p className="fade-up stagger-2 mt-6 text-sand-200/80 text-sm lg:text-base max-w-sm leading-relaxed">
                Technical performance fabrics meet refined maritime aesthetics.
                Every piece tested on the water, designed for life beyond it.
              </p>
              <div className="fade-up stagger-3 mt-8">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-white text-navy-950 px-8 py-4 text-[12px] tracking-[0.2em] uppercase font-semibold hover:bg-gold hover:text-white transition-all duration-400 group"
                >
                  Explore Sailing
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
