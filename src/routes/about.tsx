import { createFileRoute } from "@tanstack/react-router";
import aboutVintage from "@/assets/about-vintage.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Life Care H" },
      { name: "description", content: "Life Care H was established in 2002 as a voluntary grassroots social organization focused on the socio-economic development of rural and marginalized communities in Odisha." },
      { property: "og:title", content: "About Life Care H" },
      { property: "og:description", content: "Our preamble, vision and mission — serving Odisha since 2002." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="bg-background">
      <SiteHeader />
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img src={aboutVintage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.08]" loading="lazy" />
        <div className="relative mx-auto max-w-5xl px-8">
          <p className="eyebrow text-muted-foreground mb-8">About Us</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] max-w-4xl text-foreground">
            Two decades of grassroots service across <span className="italic">rural Odisha</span>
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-8 space-y-16">
          <div>
            <p className="eyebrow text-primary mb-4">Preamble</p>
            <div className="h-px w-16 bg-foreground/30 mb-6" />
            <p className="text-lg leading-relaxed text-muted-foreground">
              LIFE CARE (H) was established in 2002–03 as a voluntary grassroots social
              organization focused on the socio-economic development of rural and
              marginalized communities in Odisha. From our base in Angul district, we have
              steadily extended our work across Puri, Cuttack and beyond — building
              programs that meet people where they are.
            </p>
          </div>

          <div>
            <p className="eyebrow text-primary mb-4">Vision</p>
            <div className="h-px w-16 bg-foreground/30 mb-6" />
            <p className="text-lg leading-relaxed text-muted-foreground">
              To establish an indiscriminate society through the participation and
              involvement of target people and local communities. The organization aims to
              increase skills and capacity to achieve socio-economic and political
              empowerment.
            </p>
          </div>

          <div>
            <p className="eyebrow text-primary mb-4">Mission</p>
            <div className="h-px w-16 bg-foreground/30 mb-6" />
            <p className="text-lg leading-relaxed text-muted-foreground">
              To render need-based services for the sustainable livelihood of neglected,
              downtrodden and indigenous people, and to strengthen rural communities
              through grassroots mobilisation, capacity building and income-generation
              programmes.
            </p>
          </div>

          <div className="bg-card border border-border p-8 md:p-10">
            <p className="eyebrow text-muted-foreground mb-4">Organisation Details</p>
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
              <div>
                <dt className="text-muted-foreground">Founded</dt>
                <dd className="text-foreground mt-1">2002–03</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Registration No.</dt>
                <dd className="text-foreground mt-1">ANL-2125/121/2002-03</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Secretary</dt>
                <dd className="text-foreground mt-1">Chandan Kumar Amanta</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Headquarters</dt>
                <dd className="text-foreground mt-1">Kalama Chhuin, Angul, Odisha — 759103</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="mx-auto max-w-6xl px-8">
          <p className="eyebrow text-primary mb-4">Our Approach</p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.15] text-foreground max-w-3xl">
            Five principles that guide every program
          </h2>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/15">
            {[
              { t: "Community First", b: "Programs are co-designed with the villages and panchayats we serve — never imposed." },
              { t: "Build Local Capacity", b: "We train local leaders so the work continues long after a project ends." },
              { t: "Dignity Over Charity", b: "Livelihoods, skills and rights — not handouts — sit at the heart of our model." },
              { t: "Evidence & Outcomes", b: "Every program is tracked by reach, retention and measurable change in income or wellbeing." },
              { t: "Inclusive By Design", b: "Priority for women, SC/ST/OBC families and households in the most remote habitations." },
              { t: "Environmental Stewardship", b: "From plantations to plastic-free villages, ecology is woven into every theme." },
            ].map((v) => (
              <div key={v.t} className="bg-card p-8">
                <div className="h-px w-10 bg-primary mb-5" />
                <h3 className="font-display text-2xl text-foreground">{v.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-8">
          <p className="eyebrow text-primary mb-4">Our Journey</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground">Two decades, district by district</h2>
          <ol className="mt-14 space-y-px bg-foreground/15">
            {[
              { y: "2002", t: "Founded in Angul", b: "Registered as a voluntary grassroots organization (ANL-2125/121/2002-03) with a mandate to serve rural Odisha." },
              { y: "2008", t: "Agriculture programmes scale", b: "Organic farming and food-processing camps reach the first 1,000 farmers across Cuttack." },
              { y: "2014", t: "Health & WASH expansion", b: "Free medical camps and water-sanitation drives extend into Puri district." },
              { y: "2019", t: "Education & digital literacy", b: "School-kit distribution and the 4-month computer literacy programme reach 700+ children." },
              { y: "2024", t: "30,000 saplings milestone", b: "Social forestry crosses 30,000 trees planted alongside 20 environment campaigns." },
            ].map((m) => (
              <li key={m.y} className="bg-background p-8 md:p-10 grid md:grid-cols-[120px_1fr] gap-6">
                <div className="font-display text-3xl text-primary">{m.y}</div>
                <div>
                  <h3 className="font-display text-2xl text-foreground">{m.t}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{m.b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
