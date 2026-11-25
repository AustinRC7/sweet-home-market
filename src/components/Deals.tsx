import { BULK, SALE } from "@/lib/store";

export function DealsSection() {
  return (
    <section className="mx-auto mt-24 max-w-6xl px-5" aria-labelledby="deals-heading">
      <h2 id="deals-heading" className="text-4xl font-extrabold">Deals you'll actually use</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-5">
        <article className="relative overflow-hidden rounded-[2rem] bg-accent p-8 text-accent-foreground shadow-lg md:col-span-3 md:p-10">
          <span className="inline-block rotate-[-6deg] rounded-xl bg-background px-4 py-1 font-display text-2xl font-extrabold text-accent shadow">SALE!</span>
          <img src="/images/pick5.jpg" alt="Meat trays with orange Pick 5 for $19.99 labels" loading="lazy" className="mt-5 aspect-[4/3] w-full rounded-2xl object-cover shadow" />
          <p className="mt-6 font-display text-6xl font-extrabold leading-none md:text-7xl">
            Pick {SALE.count}<span className="block text-3xl md:text-4xl">for {SALE.price}</span>
          </p>
          <p className="mt-5 max-w-md text-lg opacity-90">Mix and match any five from these sections:</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {SALE.departments.map((d) => (
              <li key={d} className="rounded-full border-2 border-accent-foreground/70 px-4 py-1 font-bold">{d}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-[2rem] bg-secondary p-8 text-secondary-foreground md:col-span-2 md:p-10">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">stock up</p>
          <h3 className="mt-2 text-3xl font-extrabold">Buy in bulk</h3>
          <div className="mt-5 space-y-4">
            <div>
              <p className="text-lg font-bold">🥩 Bulk meat</p>
              <p className="mt-1 text-secondary-foreground/80">{BULK.meat}</p>
            </div>
            <div>
              <p className="text-lg font-bold">🌶️ Mexican groceries</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {BULK.mexican.map((m) => (
                  <li key={m} className="rounded-full bg-background px-3 py-1 text-sm font-bold">{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
