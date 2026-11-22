import { createFileRoute, Link } from "@tanstack/react-router";
import { AISLES } from "@/lib/store";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Aisles | Meat City Supermarket" },
      { name: "description", content: "Browse Meat City's meat counter, fresh produce, dairy and grocery aisles in Montgomery, AL." },
      { property: "og:title", content: "Products & Aisles | Meat City Supermarket" },
      { property: "og:description", content: "Meat counter, produce, dairy and Mexican groceries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-12">
      <h1 className="text-5xl font-extrabold md:text-6xl">Walk the aisles 🛒</h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">A peek at what you'll find inside. Selection changes daily, so come see what's fresh.</p>
      <div className="mt-12 space-y-16">
        {AISLES.map((a, i) => (
          <section key={a.title} className="grid items-center gap-8 md:grid-cols-2">
            <img src={a.img} alt={a.title} loading="lazy" className={`aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lg ${i % 2 ? "md:order-2" : ""}`} />
            <div>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-widest text-secondary-foreground">{a.tag}</span>
              <h2 className="mt-4 text-4xl font-extrabold">{a.title}</h2>
              <p className="mt-3 text-lg text-muted-foreground">{a.text}</p>
            </div>
          </section>
        ))}
      </div>
      <div className="mt-20 rounded-[2rem] bg-primary p-10 text-center text-primary-foreground">
        <h2 className="text-3xl font-extrabold">Hungry yet?</h2>
        <Link to="/about" className="mt-5 inline-block rounded-full bg-accent px-6 py-3 font-bold text-accent-foreground">Get directions →</Link>
      </div>
    </div>
  );
}
