export default function Footer() {
  const columns = [
    {
      title: "Shop",
      links: ["New Arrivals", "Men", "Women", "Sailing Clothing", "Accessories", "Sale"],
    },
    {
      title: "Company",
      links: ["About Us", "Sustainability", "Careers", "Press", "Contact"],
    },
    {
      title: "Support",
      links: ["Shipping & Returns", "Size Guide", "FAQ", "Track Order", "Gift Cards"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Imprint"],
    },
  ];

  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-16 lg:pt-24 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <span className="font-display text-xl font-bold tracking-[0.08em]">CODE-ZERO</span>
            <p className="mt-4 text-sand-400/50 text-[12px] leading-relaxed max-w-xs">
              Nautical fashion brand born on the water.
              Premium sailing-inspired clothing since 2009.
            </p>
            {/* Country flags */}
            <div className="mt-6 flex items-center gap-3">
              {["🇳🇱", "🇩🇪", "🇫🇷", "🇮🇹", "🇬🇧"].map((flag) => (
                <span key={flag} className="text-lg opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                  {flag}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold text-sand-300 mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[12px] text-sand-400/50 hover:text-gold transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/5 my-12" />

        {/* Bottom */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-sand-400/30 tracking-wide">
            © 2026 CODE-ZERO. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Visa", "Mastercard", "PayPal", "Klarna", "iDEAL"].map((payment) => (
              <span
                key={payment}
                className="text-[10px] tracking-[0.1em] uppercase text-sand-400/25"
              >
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
