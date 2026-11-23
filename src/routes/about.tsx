import { createFileRoute } from "@tanstack/react-router";
import { STORE } from "@/lib/store";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Visit Us | Meat City Supermarket" },
      { name: "description", content: "Visit Meat City Supermarket at 15 W Fairview Ave, Montgomery, AL. Open 8 AM–8 PM daily. Call (334) 269-9236." },
      { property: "og:title", content: "About & Visit Us | Meat City Supermarket" },
      { property: "og:description", content: "15 W Fairview Ave, Montgomery. Open 8 AM–8 PM daily." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-12">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <h1 className="text-5xl font-extrabold md:text-6xl">Your neighborhood market 💚</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Meat City Supermarket is a family-owned grocery and meat market on Fairview Avenue in Montgomery. We're known for our butcher-fresh meat counter, a big produce section and a great selection of Mexican groceries, with friendly faces and fair prices for the whole neighborhood.
          </p>
        </div>
        <img src="/images/logo.png" alt="Montgomery's Meat City #2 meat market and grocery sign" className="h-auto w-64 justify-self-center" />
      </div>

      <h2 className="mt-20 text-4xl font-extrabold">Come say hi</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <InfoCard emoji="📍" title="Address"><p>{STORE.street}</p><p>{STORE.city}</p></InfoCard>
        <InfoCard emoji="⏰" title="Hours"><p>{STORE.hours}</p></InfoCard>
        <InfoCard emoji="📞" title="Phone"><a href={STORE.phoneHref} className="font-bold text-primary">{STORE.phone}</a></InfoCard>
      </div>
      <div className="mt-8 overflow-hidden rounded-[2rem] border shadow-sm">
        <iframe title="Map to Meat City Supermarket" src={STORE.mapEmbed} className="h-96 w-full" loading="lazy" />
      </div>
      <a href={STORE.mapsUrl} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground">Get directions →</a>
    </div>
  );
}

function InfoCard({ emoji, title, children }: { emoji: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-card p-6 shadow-sm">
      <p className="text-3xl">{emoji}</p>
      <h3 className="mt-2 text-xl font-bold">{title}</h3>
      <div className="mt-1 text-muted-foreground">{children}</div>
    </div>
  );
}
