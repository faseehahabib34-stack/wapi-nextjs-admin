"use client";

import { useEffect, useState } from "react";

// Sticky bar under the header on the Features page.
// The link of the section you are currently reading is highlighted.
// links = [[section id on the page, label], ...]  (labels are edited in admin)
export default function FeatureSubNav({ links = [] }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(([id]) => {
      const section = document.getElementById(id);
      if (section) io.observe(section);
    });
    return () => io.disconnect();
  }, []);

  return (
    <nav
      className="sticky top-[72px] z-30 bg-white/90 backdrop-blur border-y border-[#E6ECF0]"
      aria-label="Features"
    >
      <div
        className="wrap flex gap-1 overflow-x-auto py-2 text-sm font-semibold whitespace-nowrap"
        id="subnav"
      >
        {links.map(([id, label]) => (
          <a
            key={id}
            href={"#" + id}
            className="px-3 py-1.5 rounded-full hover:bg-[#F5F8F7]"
            style={active === id ? { background: "#ECFBF4", color: "#067955" } : undefined}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
