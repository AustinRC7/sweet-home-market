import { createFileRoute, Link } from "@tanstack/react-router";
import { SPICES } from "@/lib/store";

export const Route = createFileRoute("/spices")({
  head: () => ({
    meta: [
      { title: "Mexican Spices | Meat City Supermarket" },
      { name: "description", content: "Dried chiles, canela, comino, oregano, teas and more. Shop Mexican spices from Mi Costeñita and Órale! at Meat City in Montgomery, AL." },
      { property: "og:title", content: "Mexican Spices | Meat City Supermarket" },
      { property: "og:description", content: "Dried chiles, spices, herbs and teas at Meat City in Montgomery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Spices,
});

function Spices() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-12">
      <span className="rounded-full bg-secondary px-4 py-1 text-sm font-medium">✦ Especias · now on the shelves</span>
      <h1 className="mt-5 text-5xl font-extrabold md:text-6xl">Mexican spices 🌶️</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Two whole displays of dried chiles, spices, herbs and teas from {SPICES.brands.join(" and ")}. Everything you need for salsa, mole, pozole, tamales and more.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {SPICES.photos.map((p, i) => (
          <img key={p.src} src={p.src} alt={p.alt} loading={i ? "lazy" : undefined} className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lg" />
        ))}
      </div>

      <h2 className="mt-20 text-4xl font-extrabold">What you'll find</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {SPICES.groups.map((g) => (
          <section key={g.title} className="rounded-3xl bg-card p-7 shadow-sm">
            <p className="text-3xl">{g.emoji}</p>
            <p className="mt-3 text-xs font-bold uppercase tracking-widest text-accent">{g.tag}</p>
            <h3 className="mt-1 text-2xl font-extrabold">{g.title}</h3>
            <ul className="mt-4 space-y-2">
              {g.items.map(([name, note]) => (
                <li key={name} className="flex items-baseline justify-between gap-3 border-b border-dashed pb-2 last:border-0">
                  <span className="font-bold">{name}</span>
                  <span className="text-right text-sm text-muted-foreground">{note}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p className="mt-6 text-muted-foreground">And lots more on the racks. Come browse in person!</p>

      <div className="mt-20 rounded-[2rem] bg-primary p-10 text-center text-primary-foreground">
        <h2 className="text-3xl font-extrabold">Ready to cook?</h2>
        <Link to="/about" className="mt-5 inline-block rounded-full bg-accent px-6 py-3 font-bold text-accent-foreground">Get directions →</Link>
      </div>
    </div>
  );
}
