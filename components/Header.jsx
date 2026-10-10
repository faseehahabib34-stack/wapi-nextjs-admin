"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Menu link: internal pages use <Link>, everything else a normal <a>.
function MenuLink({ item, className, onClick }) {
  const props = { className, onClick };
  if (item.openInNewTab) {
    return <a href={item.href} target="_blank" rel="noopener noreferrer" {...props}>{item.label}</a>;
  }
  if (item.href.startsWith("/")) return <Link href={item.href} {...props}>{item.label}</Link>;
  return <a href={item.href} {...props}>{item.label}</a>;
}

// "config" comes from the database (admin > Navigation and Site Settings).
export default function Header({ config }) {
  const [scrolled, setScrolled] = useState(false); // adds the thin bottom border after scrolling
  const [menuOpen, setMenuOpen] = useState(false); // mobile full-screen menu
  const [lang, setLang] = useState("EN"); // EN / AR switch (visual only for now)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Stop the page behind the mobile menu from scrolling while it is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  // Mobile menu = main links (without "Home") + the dropdown links that really go somewhere
  const mobileItems = [...config.items.filter((i) => i.href !== "/"), ...config.dropdownItems.filter((i) => i.href !== "#")];

  return (
    <>
        <header className={`hdr${scrolled ? " scrolled" : ""}`}>
          <div className="wrap flex items-center justify-between h-[72px] gap-4">
            <Link href="/" aria-label="WAPI home" className="flex items-center">
              <img src={config.logo} alt={config.logoAlt} className="h-12 w-auto" />
            </Link>
            <nav className="nav hidden lg:flex items-center gap-1" aria-label="Main">
              {config.items.map((item, i) => (
                <MenuLink key={i} item={item} className="nl" />
              ))}
              {config.dropdownItems.length > 0 && (
                <div className="dd">
                  <Link className="nl inline-flex items-center gap-1" href={config.dropdownLink}>
                    {config.dropdownLabel}{" "}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </Link>
                  <div className="dd-menu card">
                    {config.dropdownItems.map((item, i) => (
                      <MenuLink key={i} item={item} />
                    ))}
                  </div>
                </div>
              )}
            </nav>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="lang hidden md:flex rounded-lg border border-[#E6ECF0] p-1">
                <button className={lang === "EN" ? "on" : undefined} onClick={() => setLang("EN")}>EN</button>
                <button className={lang === "AR" ? "on" : undefined} onClick={() => setLang("AR")}>AR</button>
              </div>
              <a href={config.loginLink} className="hidden md:inline font-semibold text-[#33475B] hover:text-black px-2">{config.loginText}</a>
              {" "}
              <Link href={config.ctaLink} className="btn btn-primary !py-2.5 !px-4 text-sm">{config.ctaText}</Link>
              {" "}
              <button className="lg:hidden p-2 rounded-lg border border-[#E6ECF0]" aria-label="Open menu" onClick={toggleMenu}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>
        <div className={`mnav lg:hidden${menuOpen ? " open" : ""}`} aria-label="Mobile menu">
          <div className="wrap flex items-center justify-between h-[72px]">
            <img src={config.logo} alt={config.logoAlt} className="h-9" />
            <button className="p-2 rounded-lg border border-[#E6ECF0]" aria-label="Close menu" onClick={toggleMenu}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <div className="wrap pt-4 flex flex-col text-2xl font-semibold display">
            {mobileItems.map((item, i) => (
              <MenuLink key={i} item={item} className="py-3 border-b border-[#E6ECF0]" onClick={closeMenu} />
            ))}
            <div className="flex items-center justify-between py-5 text-base">
              <div className="lang flex rounded-lg border border-[#E6ECF0] p-1">
                <button className={lang === "EN" ? "on" : undefined} onClick={() => setLang("EN")}>EN</button>
                <button className={lang === "AR" ? "on" : undefined} onClick={() => setLang("AR")}>AR</button>
              </div>
              <a href={config.loginLink} className="font-semibold" onClick={closeMenu}>{config.loginText}</a>
            </div>
            <Link href={config.ctaLink} className="btn btn-primary justify-center text-lg mt-2" onClick={closeMenu}>{config.mobileCtaText}</Link>
            {" "}
            <a href={config.whatsappUrl} className="btn btn-ghost justify-center text-lg mt-3" onClick={closeMenu}>
              <svg width="20" height="20" className="text-[#25D366]">
                <use href="#i-wa" />
              </svg>
              {config.mobileWhatsappText}
            </a>
          </div>
        </div>
    </>
  );
}
