import { Link } from "@tanstack/react-router";
import { STORE } from "@/lib/store";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About & Visit" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Meat City logo" className="h-12 w-auto" />
          <span className="hidden font-display text-lg font-extrabold sm:block">Meat City</span>
        </Link>
        <nav className="flex gap-1 text-sm font-medium">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="rounded-full px-3 py-2 transition-colors hover:bg-secondary"
              activeProps={{ className: "bg-primary text-primary-foreground hover:bg-primary" }}>
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-extrabold">{STORE.name}</p>
          <p className="mt-2 opacity-80">Family owned. Montgomery made.</p>
        </div>
        <div className="opacity-90">
          <p>{STORE.street}</p><p>{STORE.city}</p>
          <a href={STORE.phoneHref} className="underline">{STORE.phone}</a>
        </div>
        <div className="opacity-90"><p className="font-bold">Open daily</p><p>{STORE.hours}</p></div>
      </div>
    </footer>
  );
}
