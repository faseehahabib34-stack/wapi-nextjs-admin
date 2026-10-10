// Wraps every page under /admin. Tells search engines NOT to index the admin area.
export const metadata = {
  title: { default: "WAPI Admin", template: "%s · WAPI Admin" },
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }) {
  return <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">{children}</div>;
}
