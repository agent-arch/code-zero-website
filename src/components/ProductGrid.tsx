interface Product {
  name: string;
  price: string;
  category: string;
  image: string;
  href: string;
  badge?: string;
}

interface ProductGridProps {
  title: string;
  subtitle: string;
  products: Product[];
}

export default function ProductGrid({ title, subtitle, products }: ProductGridProps) {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16">
          <div>
            <span className="fade-up text-[11px] tracking-[0.3em] uppercase text-gold font-medium block mb-3">
              {subtitle}
            </span>
            <h2 className="fade-up stagger-1 font-display text-4xl lg:text-6xl text-navy-950 font-light">
              {title}
            </h2>
          </div>
          <a
            href="#"
            className="fade-up stagger-2 mt-4 lg:mt-0 inline-flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-navy-700 hover:text-gold transition-colors group"
          >
            View All
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className="line-grow h-[1px] bg-sand-200 mb-12 lg:mb-16" />

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {products.map((product, i) => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`fade-up stagger-${i + 2} product-card group block`}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] bg-sand-50 overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-navy-950 text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1 font-medium">
                    {product.badge}
                  </span>
                )}
                {/* Quick view overlay */}
                <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/10 transition-colors duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                  <span className="bg-white text-navy-950 text-[11px] tracking-[0.15em] uppercase font-semibold px-6 py-2.5 translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                    Quick View
                  </span>
                </div>
              </div>
              {/* Info */}
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-navy-500 mb-1">
                  {product.category}
                </p>
                <h3 className="text-[13px] lg:text-[14px] font-medium text-navy-900 leading-snug group-hover:text-gold transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="mt-1.5 text-[13px] text-navy-700 font-medium">
                  {product.price}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
