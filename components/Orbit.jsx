// The "logos orbiting the WAPI icon" graphic (Home + Integrations pages).
// Each item is [name, short label, colour]. Items are placed on a circle;
// "radius" is a list of distances from the centre (the home page alternates
// between two rings: [30, 44], integrations uses one ring: [38]).

function place(items, radius) {
  return items.map(([name, short, color], i) => {
    const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2;
    const r = radius[i % radius.length];
    return {
      name,
      short,
      color,
      x: (50 + r * Math.cos(angle)).toFixed(3),
      y: (50 + r * Math.sin(angle)).toFixed(3),
    };
  });
}

// The dashed lines from the centre to each logo (rendered inside the <svg>)
export function OrbitSpokes({ items, radius }) {
  return place(items, radius).map((p) => (
    <line key={p.name} x1="50" y1="50" x2={p.x} y2={p.y} />
  ));
}

// The logo bubbles themselves
export function OrbitLogos({
  items,
  radius,
  tileClass = "w-11 h-11 md:w-12 md:h-12",
  labelClass = "text-[10px] md:text-[11px]",
}) {
  return place(items, radius).map((p) => (
    <div
      key={p.name}
      className="msg absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1"
      style={{ left: p.x + "%", top: p.y + "%" }}
    >
      <span
        className={`${tileClass} rounded-2xl bg-white border border-[#E6ECF0] shadow-md grid place-items-center text-[11px] font-extrabold`}
        style={{ color: p.color }}
      >
        {p.short}
      </span>
      <span
        className={`${labelClass} font-semibold text-[#33475B] whitespace-nowrap bg-white/80 px-1 rounded`}
      >
        {p.name}
      </span>
    </div>
  ));
}
