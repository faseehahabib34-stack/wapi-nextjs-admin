"use client";

import { usePathname } from "next/navigation";

// Shows the public header + footer around the page, EXCEPT on /admin pages,
// so the admin area has its own clean layout.
export default function SiteChrome({ header, footer, children }) {
  const isAdmin = usePathname().startsWith("/admin");
  return (
    <>
      {!isAdmin && header}
      {children}
      {!isAdmin && footer}
    </>
  );
}
