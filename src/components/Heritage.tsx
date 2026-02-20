export default function Heritage() {
  const stats = [
    { value: "15+", label: "Years of Sailing Heritage" },
    { value: "5", label: "Countries" },
    { value: "50+", label: "Sailing Events Partnered" },
    { value: "100%", label: "Premium Materials" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-navy-950 text-white relative grain">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <span className="fade-up text-[11px] tracking-[0.3em] uppercase text-gold font-medium block mb-4">
              Our Story
            </span>
            <h2 className="fade-up stagger-1 font-display text-4xl lg:text-6xl font-light leading-[1.1]">
              Nautical DNA, <br />
              <span className="italic text-sand-300">Modern Spirit</span>
            </h2>
            <p className="fade-up stagger-2 mt-6 text-sand-300/70 text-sm lg:text-base max-w-md leading-relaxed">
              CODE-ZERO is a nautical fashion brand developed in collaboration with passionate
              water sports enthusiasts. With breathable materials, high quality workmanship
              and best wearing comfort — we express our passion for sailing in every collection.
            </p>
            <p className="fade-up stagger-3 mt-4 text-sand-300/70 text-sm lg:text-base max-w-md leading-relaxed">
              From the 52 Super Series to the German Classics, every piece meets the demands
              of those who value freedom of movement, functional precision, and a strong
              visual presence — on and off the water.
            </p>

            {/* Stats */}
            <div className="fade-up stagger-4 grid grid-cols-2 gap-8 mt-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="font-display text-3xl lg:text-4xl text-gold font-light">
                    {stat.value}
                  </span>
                  <p className="mt-1 text-[11px] tracking-[0.15em] uppercase text-sand-400/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="fade-up relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=800&q=80"
                alt="Ocean sailing"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-gold/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
