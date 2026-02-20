export default function MarqueeBanner() {
  const items = [
    "Free Shipping Over €150",
    "★",
    "Premium Nautical Fashion",
    "★",
    "Les Voiles d'Antibes Partner",
    "★",
    "Sustainable Materials",
    "★",
    "Official Stake F1 Teamwear",
    "★",
  ];
  const repeated = [...items, ...items];

  return (
    <div className="bg-navy-950 py-3.5 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="mx-6 text-[11px] tracking-[0.25em] uppercase text-sand-300/70 font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
