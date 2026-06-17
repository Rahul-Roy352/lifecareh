import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Cultural Events — Life Care H" },
      { name: "description", content: "Cultural programs and exhibitions including Gandhi Silpa Bajara — celebrating Odisha's artisans, community collectives and traditional handlooms." },
      { property: "og:title", content: "Cultural Events — Life Care H" },
      { property: "og:description", content: "Programs that foster talent, teamwork and social harmony." },
    ],
  }),
  component: Events,
});

const EVENTS = [
  {
    title: "Cultural Program",
    body: "Organized to foster talent, teamwork and social harmony through dance, music and drama — bringing communities together to celebrate Odisha's living heritage.",
  },
  {
    title: "Gandhi Silpa Bajara",
    body: "Facilitated an exhibition in Puri for local artisans and community collectives to display and sell traditional handmade products and handlooms — connecting craftspeople directly with customers.",
  },
];

function Events() {
  return (
    <main className="bg-background">
      <SiteHeader />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-8">
          <p className="eyebrow text-muted-foreground mb-6">Cultural Events</p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.1] max-w-3xl text-foreground">
            Celebrating talent, craft and community
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-8 space-y-px bg-foreground/15">
          {EVENTS.map((e) => (
            <article key={e.title} className="bg-background p-8 md:p-12">
              <h2 className="font-display text-3xl md:text-4xl text-foreground">{e.title}</h2>
              <div className="h-px w-16 bg-primary mt-6 mb-6" />
              <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl">{e.body}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
