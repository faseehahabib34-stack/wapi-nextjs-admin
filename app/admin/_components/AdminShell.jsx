"use client";
// The frame around every admin page (except login):
//   - left sidebar (collapsible on desktop, slide-in drawer on phones)
//   - top bar with breadcrumbs, "View website" and the profile menu
// It is a client component because it needs clicks, open/close state and the current address.
// The layout (a server component) gives it the data: admin email, number of new leads, names for
// the breadcrumbs, and the logout server action.
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AdminNav from "./AdminNav";
import Icon from "./Icon";
import { crumbsFor } from "./crumbs";
import { initials } from "./format";
import { focusRing } from "./ui";

const STORAGE_KEY = "wapi-admin-sidebar-collapsed";

export default function AdminShell({ adminEmail, newLeads = 0, labels, logout, children }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false); // desktop: icons only
  const [drawerOpen, setDrawerOpen] = useState(false); // phone: sidebar visible
  const [menuOpen, setMenuOpen] = useState(false); // profile menu
  const menuRef = useRef(null);
  const crumbs = crumbsFor(pathname, labels);

  // remember the collapsed state between visits
  useEffect(() => {
    try {
      setCollapsed(localStorage.getItem(STORAGE_KEY) === "1");
    } catch {}
  }, []);

  function toggleCollapsed() {
    setCollapsed((current) => {
      const next = !current;
      try {
        localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      } catch {}
      return next;
    });
  }

  // close the drawer + menu when you go to another page
  useEffect(() => {
    setDrawerOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  // Esc closes the drawer and the menu
  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") {
        setDrawerOpen(false);
        setMenuOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // page behind the drawer must not scroll
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // click outside closes the profile menu
  useEffect(() => {
    if (!menuOpen) return;
    function onDown(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) setMenuOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [menuOpen]);

  const name = adminEmail.split("@")[0];

  return (
    <div className="min-h-screen">
      <a href="#main" className="sr-only z-[60] rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>

      {/* dark background behind the drawer (phones only) */}
      {drawerOpen && <div className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm md:hidden" onClick={() => setDrawerOpen(false)} aria-hidden="true" />}

      <aside
        id="admin-sidebar"
        aria-label="Sidebar"
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-slate-950 text-slate-300 transition-all duration-200 md:translate-x-0 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } ${collapsed ? "md:w-[76px]" : "md:w-64"}`}
      >
        <div className={`flex h-16 shrink-0 items-center gap-3 border-b border-white/10 px-5 ${collapsed ? "md:justify-center md:px-0" : ""}`}>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-base font-bold text-white shadow-lg shadow-brand-500/30">W</span>
          <div className={`min-w-0 flex-1 ${collapsed ? "md:hidden" : ""}`}>
            <p className="truncate text-sm font-semibold leading-tight text-white">WAPI Admin</p>
            <p className="truncate text-xs text-slate-500">Website CMS</p>
          </div>
          <button type="button" onClick={() => setDrawerOpen(false)} aria-label="Close menu" className={`rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white md:hidden ${focusRing}`}>
            <Icon name="x" className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-5">
          <AdminNav collapsed={collapsed} newLeads={newLeads} onNavigate={() => setDrawerOpen(false)} />
        </div>

        <div className="shrink-0 border-t border-white/10 p-3">
          <Link
            href="/"
            target="_blank"
            title={collapsed ? "View website" : undefined}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${collapsed ? "md:justify-center md:px-0" : ""}`}
          >
            <Icon name="globe" className="h-[18px] w-[18px] shrink-0" />
            <span className={collapsed ? "md:sr-only" : ""}>View website</span>
            <Icon name="external" className={`ml-auto h-3.5 w-3.5 ${collapsed ? "md:hidden" : ""}`} />
          </Link>
        </div>
      </aside>

      <div className={`transition-[padding] duration-200 ${collapsed ? "md:pl-[76px]" : "md:pl-64"}`}>
        <header className="sticky top-0 z-30 flex h-16 items-center gap-2 border-b border-slate-200/80 bg-white/80 px-4 backdrop-blur-md md:px-8">
          <button type="button" onClick={() => setDrawerOpen(true)} aria-label="Open menu" aria-controls="admin-sidebar" aria-expanded={drawerOpen} className={`-ml-2 rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden ${focusRing}`}>
            <Icon name="menu" className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={toggleCollapsed}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-controls="admin-sidebar"
            aria-expanded={!collapsed}
            className={`-ml-2 hidden rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 md:inline-flex ${focusRing}`}
          >
            <Icon name="panel" className="h-5 w-5" />
          </button>

          <nav aria-label="Breadcrumb" className="min-w-0 flex-1">
            <ol className="flex items-center gap-1.5 text-sm">
              {crumbs.map((crumb, index) => {
                const last = index === crumbs.length - 1;
                return (
                  <li key={crumb.href} className={`items-center gap-1.5 ${last ? "flex min-w-0" : "hidden sm:flex"}`}>
                    {index > 0 && <Icon name="chevronRight" className="hidden h-3.5 w-3.5 shrink-0 text-slate-300 sm:block" />}
                    {last ? (
                      <span aria-current="page" className="truncate font-semibold text-slate-900">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link href={crumb.href} className="rounded text-slate-500 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25">
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>

          <Link href="/" target="_blank" className={`hidden items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 sm:inline-flex ${focusRing}`}>
            View website
            <Icon name="external" className="h-3.5 w-3.5" />
          </Link>

          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              aria-label="Open profile menu"
              className={`flex items-center gap-2 rounded-full py-1 pl-1 pr-2 hover:bg-slate-100 ${focusRing}`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-xs font-bold text-white">{initials(adminEmail)}</span>
              <Icon name="chevronDown" className="hidden h-4 w-4 text-slate-400 sm:block" />
            </button>
            {menuOpen && (
              <div role="menu" aria-label="Profile" className="absolute right-0 mt-2 w-64 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl ring-1 ring-black/5">
                <div className="border-b border-slate-100 px-4 py-3">
                  <p className="truncate text-sm font-semibold capitalize text-slate-900">{name}</p>
                  <p className="truncate text-xs text-slate-500">{adminEmail}</p>
                </div>
                <div className="p-1.5">
                  <Link role="menuitem" href="/admin/account" className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:outline-none">
                    <Icon name="user" className="h-4 w-4 text-slate-400" /> My Account
                  </Link>
                  <Link role="menuitem" href="/" target="_blank" className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:outline-none">
                    <Icon name="globe" className="h-4 w-4 text-slate-400" /> View website
                  </Link>
                </div>
                <form action={logout} className="border-t border-slate-100 p-1.5">
                  <button type="submit" role="menuitem" className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm font-medium text-red-600 hover:bg-red-50 focus-visible:bg-red-50 focus-visible:outline-none">
                    <Icon name="logout" className="h-4 w-4" /> Log out
                  </button>
                </form>
              </div>
            )}
          </div>
        </header>

        <main id="main" tabIndex={-1} className="mx-auto w-full max-w-6xl px-4 py-6 outline-none md:px-8 md:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
