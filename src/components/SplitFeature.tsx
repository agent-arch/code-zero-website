export default function SplitFeature() {
  return (
    <section className="py-20 lg:py-0">
      <div className="grid lg:grid-cols-2">
        {/* Men */}
        <a href="#" className="group relative block h-[500px] lg:h-[700px] overflow-hidden">
          <img
            src="/products/men-collection.jpg"
            alt="CODE-ZERO Men's Collection"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <span className="fade-up text-[10px] tracking-[0.3em] uppercase text-gold-light font-medium block mb-2">
              Collection
            </span>
            <h3 className="fade-up stagger-1 font-display text-3xl lg:text-5xl text-white font-light">
              Men
            </h3>
            <div className="fade-up stagger-2 mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-white/80 group-hover:text-gold-light transition-colors">
              Discover
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>

        {/* Women */}
        <a href="#" className="group relative block h-[500px] lg:h-[700px] overflow-hidden">
          <img
            src="/products/women-collection.jpg"
            alt="CODE-ZERO Women's Collection"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <span className="fade-up text-[10px] tracking-[0.3em] uppercase text-gold-light font-medium block mb-2">
              Collection
            </span>
            <h3 className="fade-up stagger-1 font-display text-3xl lg:text-5xl text-white font-light">
              Women
            </h3>
            <div className="fade-up stagger-2 mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-white/80 group-hover:text-gold-light transition-colors">
              Discover
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
