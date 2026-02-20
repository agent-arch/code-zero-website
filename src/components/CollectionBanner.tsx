export default function CollectionBanner() {
  return (
    <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden grain">
      <img
        src="https://images.unsplash.com/photo-1534854638093-bada1813ca19?w=1920&q=80"
        alt="Yacht lifestyle"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-navy-950/50" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div>
          <span className="fade-up text-[11px] tracking-[0.3em] uppercase text-gold-light font-medium block mb-4">
            Les Voiles d&apos;Antibes × CODE-ZERO
          </span>
          <h2 className="fade-up stagger-1 font-display text-3xl sm:text-5xl lg:text-7xl text-white font-light">
            Where Racing Meets <span className="italic">Elegance</span>
          </h2>
          <p className="fade-up stagger-2 mt-5 text-sand-200/70 text-sm max-w-md mx-auto leading-relaxed">
            Official partner of Les Voiles d&apos;Antibes. Exclusive regatta collections
            celebrating the spirit of classic sailing.
          </p>
          <div className="fade-up stagger-3 mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-3 border border-white/40 text-white px-8 py-4 text-[12px] tracking-[0.2em] uppercase font-semibold hover:bg-white hover:text-navy-950 transition-all duration-400 group"
            >
              Shop the Collection
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
