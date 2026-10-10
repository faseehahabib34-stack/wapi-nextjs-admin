"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Number count-up animation (used by elements with data-count="48600")
function countUp(el) {
  const target = parseFloat(el.dataset.count);
  const decimals = +(el.dataset.dec || 0);
  const suffix = el.dataset.suffix || "";
  let start = null;

  function frame(ts) {
    if (!start) start = ts;
    const p = Math.min((ts - start) / 1400, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent =
      (target * eased).toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }) + suffix;
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

// Reveals elements with class "rv" (or data-anim) when they scroll into view,
// staggers chat bubbles (.msg) and runs the number counters.
// It re-runs on every page change, so it works with Next.js navigation.
export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.add("in");

          const msgs = el.querySelectorAll(".msg");
          const step = msgs.length > 6 ? 0.09 : 0.45;
          msgs.forEach((m, i) => {
            m.style.transitionDelay = 0.2 + i * step + "s";
          });

          el.querySelectorAll("[data-count]").forEach(countUp);
          if (el.dataset.count) countUp(el);

          io.unobserve(el);
        });
      },
      { threshold: 0.18 }
    );

    document.querySelectorAll(".rv,[data-anim]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
