import { createFileRoute } from "@tanstack/react-router";
import impact from "@/assets/impact.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — Life Care H" },
      { name: "description", content: "Measuring our reach: women trained, farmers supported, saplings planted, and communities served across Odisha in 2025–26." },
      { property: "og:title", content: "Impact — Life Care H" },
      { property: "og:description", content: "Numbers behind the work — 2025–2026 reach across Puri, Cuttack and Angul." },
    ],
  }),
  component: Impact,
});

const STATS = [
  { n: "450", t: "Community members mobilised · Puri" },
  { n: "700", t: "Grassroots leaders trained · Cuttack" },
  { n: "160", t: "Artisans supported · Cuttack" },
  { n: "529", t: "Youth vocational training · Puri" },
  { n: "800", t: "SC/ST/OBC participants skilled · Cuttack" },
  { n: "1,000", t: "Farmers in sustainable agriculture" },
  { n: "1,000", t: "Trained in food processing" },
  { n: "850+", t: "Health camp beneficiaries" },
  { n: "700", t: "Children supported in education" },
  { n: "30,000", t: "Saplings planted · Puri" },
  { n: "20", t: "Environment awareness campaigns" },
  { n: "20+", t: "Years of grassroots service" },
];

function Impact() {
  return (
    <main className="bg-background">
      <SiteHeader />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-8">
          <p className="eyebrow text-muted-foreground mb-6">Our Impact · 2025–2026</p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.1] max-w-4xl text-foreground">
            Influencing how people, organisations and movements think and act
          </h1>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-8 grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-foreground/15">
          {STATS.map((s) => (
            <div key={s.t} className="bg-background p-8">
              <div className="font-display text-5xl text-primary">{s.n}</div>
              <div className="text-sm tracking-wide text-muted-foreground mt-3">{s.t}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card border-t border-border">
        <div className="mx-auto max-w-6xl px-8 grid md:grid-cols-2 gap-12 items-center">
          <img src={impact} alt="Community impact" className="aspect-square w-full object-cover" loading="lazy" />
          <div>
            <p className="eyebrow text-primary mb-4">Where We Work</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Rooted in Angul · Working across Puri & Cuttack
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              From our headquarters in Kalama Chhuin, Angul, our teams travel across coastal
              and central Odisha — partnering with Self Help Groups, panchayats and local
              artisans. Every program is co-designed with the communities it serves.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
