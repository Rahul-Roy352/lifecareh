import { createFileRoute } from "@tanstack/react-router";
import joinUs from "@/assets/join-us.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FeaturedPrograms } from "@/components/FeaturedPrograms";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Our Programs — Life Care H" },
      { name: "description", content: "Women empowerment, skill development, agriculture, health, education, environment and consumer awareness programs across Puri, Cuttack and Angul districts." },
      { property: "og:title", content: "Programs — Life Care H" },
      { property: "og:description", content: "Need-based programs supporting women, youth and farmers across Odisha." },
    ],
  }),
  component: Programs,
});

type Item = { title: string; body: string };
type Group = { eyebrow: string; heading: string; items: Item[] };

const GROUPS: Group[] = [
  {
    eyebrow: "Community Empowerment & Capacity Building",
    heading: "Mobilising villages and building local leaders",
    items: [
      { title: "Village Collective Formation", body: "Mobilised 450+ community members in Puri district into village-level collectives for shared savings, planning and local action." },
      { title: "Grassroots Leadership Training", body: "Conducted in Cuttack with around 700 participants across 20 collectives, building skills in leadership, rights and public-scheme awareness." },
      { title: "Artisan & Livelihood Support", body: "Organized 16 camps in Cuttack district for 160 traditional artisans to strengthen cane, bamboo, terracotta and appliqué livelihoods." },
      { title: "Vocational Training", body: "Provided practical skills training to 529 unemployed youth and adults in Puri district." },
      { title: "Skill Development for SC, ST, OBC", body: "Organized 27 training programs in Cuttack district, benefiting 800 participants with skills like carpentry, masonry and tailoring." },
    ],
  },
  {
    eyebrow: "Agriculture & Livelihood",
    heading: "Sustainable farming and food security",
    items: [
      { title: "Sustainable Agriculture Program", body: "Organized 30 workshops in Cuttack district, guiding 1,000 farmers on organic farming, soil conservation and modern agricultural technologies." },
      { title: "Food Processing Training", body: "Hosted 20 training camps in Cuttack district for around 1,000 farmers, women and youths on food preservation and value addition." },
    ],
  },
  {
    eyebrow: "Health, Water & Sanitation",
    heading: "Healthier homes and communities",
    items: [
      { title: "Health Program", body: "Hosted 19 health camps in Cuttack district, providing free medical check-ups and essential medicines to over 850 beneficiaries." },
      { title: "Water & Sanitation Program", body: "Implemented in Puri district to spread awareness about safe drinking water, proper waste disposal and the prevention of waterborne diseases." },
    ],
  },
  {
    eyebrow: "Education & Youth",
    heading: "Opening doors through learning",
    items: [
      { title: "Education Program", body: "Supported around 700 underprivileged children in Cuttack district by distributing free books, study materials and school bags." },
      { title: "Computer Education Program", body: "Ran a four-month program in Puri district for school-going children and rural youth to learn MS Office, typing and internet usage." },
    ],
  },
  {
    eyebrow: "Environment & Awareness",
    heading: "Protecting people and the planet",
    items: [
      { title: "Social Forestry & Plantation", body: "Planted around 30,000 saplings — including Mango, Eucalyptus and Akashi — across Puri district." },
      { title: "National Environment Awareness Campaign", body: "Conducted 20 campaigns in Puri district with 700 active participants focusing on plastic pollution and natural resource conservation." },
      { title: "Awareness on Electronic Waste", body: "Educated communities on the harmful effects of e-waste and safe disposal." },
      { title: "Consumer & Micro-Insurance Awareness", body: "Educated thousands across Puri and Cuttack on consumer rights, safe online shopping and financial security through insurance." },
    ],
  },
];

function Programs() {
  return (
    <main className="bg-background">
      <SiteHeader />
      <section className="relative min-h-[55vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${joinUs})` }} role="img" aria-label="" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto flex min-h-[55vh] max-w-5xl flex-col justify-center px-8 py-24 text-white">
          <p className="eyebrow mb-6 text-white/80">Our Programs & Impact · 2025–2026</p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.1] max-w-3xl">
            Need-based programs serving thousands across Odisha
          </h1>
        </div>
      </section>

      <FeaturedPrograms />



      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-8 space-y-24">
          {GROUPS.map((g) => (
            <div key={g.eyebrow}>
              <p className="eyebrow text-primary mb-4">{g.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground max-w-3xl">{g.heading}</h2>
              <div className="h-px w-full bg-foreground/15 mt-8 mb-10" />
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                {g.items.map((it) => (
                  <div key={it.title}>
                    <h3 className="font-display text-2xl text-foreground">{it.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{it.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
