import { createFileRoute, Link } from "@tanstack/react-router";
import { AISLES, STORE } from "@/lib/store";
import { DealsSection } from "@/components/Deals";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meat City Supermarket | Fresh meat & groceries in Montgomery" },
      { name: "description", content: "Fresh-cut meat, a big produce section and Mexican groceries at 15 W Fairview Ave, Montgomery. Pick 5 for $19.99 and bulk buys. Open 8 AM–8 PM daily." },
      { property: "og:title", content: "Meat City Supermarket | Montgomery, AL" },
      { property: "og:description", content: "Fresh meat, produce and groceries. Pick 5 for $19.99 and bulk buys. Open 8 AM–8 PM daily." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-12 md:grid-cols-2 md:pt-20">
        <div>
          <span className="inline-block rounded-full bg-secondary px-4 py-1 text-sm font-medium text-secondary-foreground">📍 Fairview Ave · open till 8</span>
          <h1 className="mt-5 text-5xl font-extrabold leading-[1.02] md:text-7xl">
            Fresh cuts.<br />Real prices.<br /><span className="text-accent">Big flavor.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Your neighborhood grocery & meat market in Montgomery. Stock up on butcher-fresh meat, produce and everyday groceries.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className="rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition hover:-translate-y-0.5">Plan your visit →</Link>
            <Link to="/products" className="rounded-full border-2 border-primary px-6 py-3 font-bold text-primary transition hover:bg-secondary">Browse the aisles</Link>
          </div>
        </div>
        <div className="relative">
          <img src="/images/meat.jpg" alt="Meat counter at Meat City" className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl" />
          <div className="absolute -bottom-5 -left-3 rotate-[-4deg] rounded-2xl bg-accent px-5 py-3 font-display font-extrabold text-accent-foreground shadow-lg">Open 8–8 daily ✦</div>
        </div>
      </section>

      <DealsSection />

      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-4xl font-extrabold">What's on the shelves</h2>
          <Link to="/products" className="font-bold text-primary underline-offset-4 hover:underline">See all →</Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {AISLES.slice(0, 3).map((a) => (
            <article key={a.title} className="overflow-hidden rounded-3xl bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <img src={a.img} alt={a.title} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="p-5"><p className="text-xs font-bold uppercase tracking-widest text-accent">{a.tag}</p><h3 className="mt-1 text-xl font-bold">{a.title}</h3></div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="grid gap-6 rounded-[2rem] bg-secondary p-8 md:grid-cols-3 md:p-12">
          {[["🥩", "Butcher-fresh", "Cut in store, every day."], ["🌶️", "Mexican groceries", "The brands and ingredients you love."], ["💚", "Family owned", "A real neighborhood spot."]].map(([e, t, d]) => (
            <div key={t}><p className="text-4xl">{e}</p><h3 className="mt-3 text-2xl font-bold">{t}</h3><p className="mt-1 text-secondary-foreground/80">{d}</p></div>
          ))}
        </div>
        <p className="mt-6 text-center text-muted-foreground">{STORE.street}, {STORE.city} · <a href={STORE.phoneHref} className="font-bold text-primary">{STORE.phone}</a></p>
      </section>
    </>
  );
}
