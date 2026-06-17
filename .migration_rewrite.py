from pathlib import Path

root = Path(__file__).resolve().parent

files = {
    "package.json": '''{
  "name": "life-care-h",
  "private": true,
  "sideEffects": false,
  "type": "module",
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "format": "prettier --write ."
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-aspect-ratio": "^1.1.8",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-menubar": "^1.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.8",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@tailwindcss/vite": "^4.2.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.575.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-day-picker": "^9.14.0",
    "react-hook-form": "^7.71.2",
    "react-resizable-panels": "^4.6.5",
    "react-router-dom": "^6.18.2",
    "recharts": "^2.15.4",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.5.0",
    "tailwindcss": "^4.2.1",
    "tw-animate-css": "^1.3.4",
    "vaul": "^1.1.2",
    "vite-tsconfig-paths": "^6.0.2",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.32.0",
    "@types/node": "^22.16.5",
    "@types/react": "^19.2.0",
    "@types/react-dom": "^19.2.0",
    "@vitejs/plugin-react": "^5.0.4",
    "eslint": "^9.32.0",
    "eslint-config-prettier": "^10.1.1",
    "eslint-plugin-prettier": "^5.2.6",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^15.15.0",
    "prettier": "^3.7.3",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.56.1",
    "vite": "^7.3.1"
  }
}
''',
    "vite.config.ts": '''import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
});
''',
    "src/routes/index.tsx": '''import { useEffect } from "react";
import { Link } from "react-router-dom";
import heroMarch from "@/assets/hero-march.jpg";
import joinUs from "@/assets/join-us.jpg";
import donate from "@/assets/donate.jpg";
import testimonialBg1 from "@/assets/testimonial-bg-1.jpg";
import testimonialBg2 from "@/assets/testimonial-bg-2.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  useEffect(() => {
    document.title = "Life Care H — Empowering Rural Odisha Since 2002";

    const els = Array.from(document.querySelectorAll('.impact-reveal')) as HTMLElement[];
    if (!els.length) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-6');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    els.forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-6');
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <main>
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${heroMarch})` }} role="img" aria-label="Community at work" />
        <div className="absolute inset-0 bg-black/55" />
        <SiteHeader variant="dark" />
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
          <p className="eyebrow mb-8 text-white/80">Serving Odisha Since 2002</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-normal max-w-5xl leading-[1.05]">
            Life Care H
          </h1>
          <p className="mt-10 max-w-2xl text-lg md:text-2xl font-display italic text-white/90 leading-relaxed">
            Need-based services for the sustainable livelihood of neglected, downtrodden and
            indigenous people — and for poor women and children.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link to="/programs" className="btn-donate">Our Programs</Link>
            <Link to="/contact" className="btn-donate" style={{ backgroundColor: "transparent", border: "1px solid white" }}>
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-8 grid md:grid-cols-4 gap-10">
          {[
            { n: "20+", t: "Years of Service" },
            { n: "2,500+", t: "Women & Youth Trained" },
            { n: "30,000", t: "Saplings Planted" },
            { n: "5+", t: "Districts Served" },
          ].map((s) => (
            <div key={s.t} className="text-center">
              <div className="font-display text-5xl md:text-6xl text-primary">{s.n}</div>
              <div className="eyebrow text-muted-foreground mt-3">{s.t}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card border-y border-border py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-8">
          <div className="max-w-3xl mb-16">
            <p className="eyebrow text-primary mb-4">What We Do</p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.15] text-foreground">
              Five focus areas, one community-led approach
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              From village collectives to plantations, our programs are co-designed with
              the families and panchayats we serve — practical, locally rooted and
              measured by outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/15">
            {[
              { t: "Community Empowerment", b: "Village collectives, grassroots leadership and rights awareness." },
              { t: "Agriculture & Livelihood", b: "Organic farming, food processing and FPO linkages for 1,000+ farmers." },
              { t: "Health, Water & Sanitation", b: "Free medical camps, WASH drives and women's health awareness." },
              { t: "Education & Youth", b: "Books, school kits and computer literacy for 700+ children." },
              { t: "Environment", b: "30,000+ saplings planted and active campaigns against plastic and e-waste." },
              { t: "Cultural & Awareness", b: "Artisan exhibitions, consumer rights and micro-insurance literacy." },
            ].map((c) => (
              <div key={c.t} className="bg-card p-8">
                <div className="h-px w-10 bg-primary mb-5" />
                <h3 className="font-display text-2xl text-foreground">{c.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/programs" className="btn-donate inline-block">Explore all programs</Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-6xl px-8">
          <p className="eyebrow text-primary mb-4">OUR IMPACT</p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.15] text-foreground max-w-3xl">
            Creating Meaningful Change Across Odisha
          </h2>
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <figure className="relative overflow-hidden rounded-sm min-h-[420px] flex flex-col justify-end p-10">
              <img src={testimonialBg1} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1024} height={768} />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10">
                <blockquote className="font-display italic text-2xl md:text-3xl leading-snug text-white">
                  "Our collective gave us a voice in the panchayat. Today, twenty-eight families in our village have a steady income."
                </blockquote>
                <figcaption className="mt-8">
                  <div className="text-white font-medium">Sunita Behera</div>
                  <div className="text-sm text-white/70 mt-1">Village Collective Member · Puri</div>
                </figcaption>
              </div>
            </figure>
            <figure className="relative overflow-hidden rounded-sm min-h-[420px] flex flex-col justify-end p-10">
              <img src={testimonialBg2} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1024} height={768} />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10">
                <blockquote className="font-display italic text-2xl md:text-3xl leading-snug text-white">
                  "The food-processing training changed how I see my farm. Surplus mangoes are now pickles that sell year-round."
                </blockquote>
                <figcaption className="mt-8">
                  <div className="text-white font-medium">Bipin Sahoo</div>
                  <div className="text-sm text-white/70 mt-1">Smallholder Farmer · Cuttack</div>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card border-y border-border">
        <div className="mx-auto max-w-6xl px-8">
          <p className="eyebrow text-muted-foreground mb-8 text-center">Working Alongside</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 items-center justify-items-center">
            {["Panchayat Raj", "NABARD", "DRDA Angul", "KVK Cuttack", "Forest Dept.", "District Admin."].map((p) => (
              <div key={p} className="font-display text-lg md:text-xl text-foreground/60 text-center">{p}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${joinUs})` }} role="img" aria-label="Community gathering" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl items-center px-8 py-24">
          <div className="ml-auto max-w-2xl text-white">
            <p className="eyebrow mb-6">Our Vision</p>
            <div className="h-px w-full bg-white/40 mb-10" />
            <h2 className="font-display text-3xl md:text-5xl leading-[1.25]">
              An indiscriminate society built through the participation and involvement of
              the target people and local communities.
            </h2>
            <Link to="/about" className="btn-donate mt-12 inline-block">Read Our Story</Link>
          </div>
        </div>
      </section>

      <section className="py-[100px] md:py-[140px]" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="mx-auto max-w-6xl px-8">
          <p className="eyebrow text-primary mb-4 impact-reveal">OUR IMPACT</p>
          <h2 className="font-display text-3xl md:text-4xl leading-[1.15] text-foreground max-w-3xl impact-reveal">
            Creating Meaningful Change Across Odisha
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl impact-reveal">
            Through community-driven initiatives, education support, healthcare awareness, environmental activities, and volunteer engagement, we are working to build stronger and more sustainable communities throughout Odisha.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: '10,000+', t: 'Lives Reached' },
              { n: '50+', t: 'Villages Supported' },
              { n: '25+', t: 'Community Programs' },
              { n: '500+', t: 'Volunteers Engaged' },
            ].map((c) => (
              <div key={c.t} className="impact-reveal bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-2">
                <div className="font-display text-4xl md:text-5xl text-foreground">{c.n}</div>
                <div className="eyebrow text-muted-foreground mt-3">{c.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${donate})` }} role="img" aria-label="Support our cause" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-8 py-24 text-center text-white">
          <p className="eyebrow mb-8 text-white/85">Stand With Us</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.15] max-w-4xl">
            Help us empower communities across Odisha
          </h2>
          <Link to="/contact" className="btn-donate mt-12">Contact Us</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
''',
    "src/routes/about.tsx": '''import { useEffect } from "react";
import aboutVintage from "@/assets/about-vintage.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function About() {
  useEffect(() => {
    document.title = "About Us — Life Care H";
  }, []);

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
''',
    "src/routes/programs.tsx": '''import { useEffect } from "react";
import joinUs from "@/assets/join-us.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FeaturedPrograms } from "@/components/FeaturedPrograms";

const GROUPS = [
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

export default function Programs() {
  useEffect(() => {
    document.title = "Our Programs — Life Care H";
  }, []);

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
''',
    "src/routes/programs.$slug.tsx": '''import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getProgramBySlug, PROGRAM_DETAILS, type ProgramDetail } from "@/data/programs";

export default function ProgramDetailPage() {
  const params = useParams();
  const program = useMemo(() => getProgramBySlug(params.slug ?? ""), [params.slug]);

  useEffect(() => {
    document.title = program ? `${program.title} — Life Care H` : "Program — Life Care H";
  }, [program]);

  if (!program) {
    return (
      <main className="bg-background">
        <SiteHeader />
        <section className="mx-auto max-w-3xl px-8 py-32 text-center">
          <p className="eyebrow text-primary mb-4">Not found</p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground">
            We couldn't find that program
          </h1>
          <Link to="/programs" className="btn-donate mt-10 inline-block">
            Back to Programs
          </Link>
        </section>
        <SiteFooter />
      </main>
    );
  }

  const others = PROGRAM_DETAILS.filter((p) => p.slug !== program.slug);

  return (
    <main className="bg-background">
      <SiteHeader />

      <div className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-5xl px-6 md:px-8 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/programs">Programs</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{program.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <section className="relative w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${program.image})` }}
          role="img"
          aria-label={program.alt}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto flex min-h-[55vh] max-w-5xl flex-col justify-center px-8 py-24 text-white">
          <p className="eyebrow mb-6 text-white/80">{program.eyebrow}</p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.1] max-w-3xl">
            {program.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-white/85 leading-relaxed">
            {program.body}
          </p>
          <p className="mt-6 text-xs tracking-[0.25em] uppercase text-white/70">
            {program.region}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-16 px-6 md:px-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="eyebrow text-primary mb-4">Program Overview</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-[1.15]">
              What this program does
            </h2>
            <div className="h-px w-16 bg-foreground/20 my-6" />
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              {program.overview.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <h3 className="font-display text-2xl md:text-3xl text-foreground mt-14">
              Program highlights
            </h3>
            <ul className="mt-6 space-y-3">
              {program.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-base text-foreground/85">
                  <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="md:col-span-2">
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src={program.image}
                alt={program.alt}
                className="h-full w-full object-cover aspect-[4/5]"
              />
            </div>
            <div className="mt-8 border border-border bg-card p-6 md:p-8">
              <p className="eyebrow text-primary mb-5">Outcomes so far</p>
              <dl className="grid grid-cols-2 gap-6">
                {program.outcomes.map((o) => (
                  <div key={o.label}>
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{o.label}</dt>
                    <dd className="mt-2 font-display text-3xl text-foreground">{o.value}</dd>
                  </div>
                ))}
              </dl>
              <Link to="/contact" className="btn-donate mt-8 inline-block w-full text-center">
                Support this program
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30 py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <p className="eyebrow text-primary mb-4">Explore more</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Other programs
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/programs/${p.slug}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full w-full object-cover aspect-[4/3] transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <p className="eyebrow text-primary mt-5">{p.eyebrow}</p>
                <h3 className="font-display text-xl text-foreground mt-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
''',
    "src/routes/impact.tsx": '''import { useEffect } from "react";
import impact from "@/assets/impact.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

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

export default function Impact() {
  useEffect(() => {
    document.title = "Our Impact — Life Care H";
  }, []);

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
''',
    "src/routes/events.tsx": '''import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

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

export default function Events() {
  useEffect(() => {
    document.title = "Cultural Events — Life Care H";
  }, []);

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
''',
    "src/routes/contact.tsx": '''import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact — Life Care H";
  }, []);

  return (
    <main className="bg-background">
      <SiteHeader />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-8">
          <p className="eyebrow text-muted-foreground mb-6">Contact</p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.1] max-w-3xl text-foreground">
            Reach out. Partner with us.
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-8 grid md:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow text-primary mb-4">Address</p>
            <div className="h-px w-16 bg-foreground/30 mb-6" />
            <p className="text-lg text-foreground leading-relaxed">
              Life Care H<br />
              At-P.O. Kalama Chhuin<br />
              Via-Dera, Dist-Angul<br />
              Odisha, PIN-759103<br />
              India
            </p>
          </div>
          <div className="space-y-10">
            <div>
              <p className="eyebrow text-primary mb-4">Email</p>
              <div className="h-px w-16 bg-foreground/30 mb-6" />
              <a href="mailto:lifecaretalcher@gmail.com" className="text-lg text-foreground hover:text-primary">
                lifecaretalcher@gmail.com
              </a>
            </div>
            <div>
              <p className="eyebrow text-primary mb-4">Secretary</p>
              <div className="h-px w-16 bg-foreground/30 mb-6" />
              <p className="text-lg text-foreground">Chandan Kumar Amanta</p>
            </div>
            <div>
              <p className="eyebrow text-primary mb-4">Registration</p>
              <div className="h-px w-16 bg-foreground/30 mb-6" />
              <p className="text-lg text-foreground">ANL-2125/121/2002-03</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-5xl px-8 grid md:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow text-primary mb-4">Office Hours</p>
            <div className="h-px w-16 bg-foreground/30 mb-6" />
            <dl className="space-y-2 text-foreground">
              <div className="flex justify-between"><dt>Monday – Friday</dt><dd className="text-muted-foreground">9:30 – 18:00</dd></div>
              <div className="flex justify-between"><dt>Saturday</dt><dd className="text-muted-foreground">10:00 – 14:00</dd></div>
              <div className="flex justify-between"><dt>Sunday</dt><dd className="text-muted-foreground">Closed</dd></div>
            </dl>
            <p className="mt-6 text-sm text-muted-foreground">Field visits to Puri & Cuttack programmes can be arranged on request.</p>
          </div>
          <div>
            <p className="eyebrow text-primary mb-4">Ways To Partner</p>
            <div className="h-px w-16 bg-foreground/30 mb-6" />
            <ul className="space-y-4 text-foreground">
              <li><span className="font-medium">CSR & Institutional grants</span><p className="text-sm text-muted-foreground mt-1">Co-fund programmes in education, livelihoods or environment.</p></li>
              <li><span className="font-medium">Volunteering & internships</span><p className="text-sm text-muted-foreground mt-1">Join field teams in Angul, Puri or Cuttack districts.</p></li>
              <li><span className="font-medium">In-kind support</span><p className="text-sm text-muted-foreground mt-1">Books, computers, medical supplies and saplings.</p></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-8">
          <p className="eyebrow text-primary mb-4">Send Us A Message</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">We typically reply within two working days.</h2>
          {submitted ? (
            <div className="rounded-3xl border border-primary bg-primary/10 p-8 text-foreground">
              Thank you — we have received your message and will be in touch shortly.
            </div>
          ) : (
            <form className="mt-10 space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="grid sm:grid-cols-2 gap-6">
                <label className="block">
                  <span className="text-sm text-muted-foreground">Name</span>
                  <input required type="text" className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:border-primary" />
                </label>
                <label className="block">
                  <span className="text-sm text-muted-foreground">Email</span>
                  <input required type="email" className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:border-primary" />
                </label>
              </div>
              <label className="block">
                <span className="text-sm text-muted-foreground">Subject</span>
                <input type="text" className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:border-primary" />
              </label>
              <label className="block">
                <span className="text-sm text-muted-foreground">Message</span>
                <textarea required rows={6} className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:border-primary" />
              </label>
              <button type="submit" className="btn-donate">Send message</button>
            </form>
          )}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
''',
    "src/components/SiteHeader.tsx": '''import { Link, NavLink } from "react-router-dom";
import logoImage from "@/assets/logo.jpg";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Impact", to: "/impact" },
  { label: "Events", to: "/events" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";

  return (
    <>
      {!isDark && <div aria-hidden className="h-[88px] md:h-[96px]" />}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors ${
          isDark
            ? "bg-black/30 backdrop-blur-md supports-[backdrop-filter]:bg-black/20"
            : "bg-background/85 backdrop-blur-md border-b border-border/60"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8 py-4 md:py-5">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoImage} alt="Life Care H" className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover bg-white" width={64} height={64} />
            <div className={`leading-none ${isDark ? "text-white" : "text-foreground"}`}>
              <div className="font-display text-2xl tracking-wide">Life Care H</div>
              <div className="text-[10px] tracking-[0.35em] mt-1 opacity-80">ODISHA</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {NAV.map((n) => (
              <NavLink
                key={n.label}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors ${
                    isActive ? "text-primary" : isDark ? "text-white/90 hover:text-primary" : "text-foreground hover:text-primary"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <Link to="/contact" className="btn-donate hidden md:inline-block">Support Us</Link>
        </div>
      </header>
    </>
  );
}
''',
    "src/components/SiteFooter.tsx": '''import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import logoImage from "@/assets/logo.jpg";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-100 py-16 text-left">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid gap-12 lg:grid-cols-3 text-left">
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-3">
              <img
                src={logoImage}
                alt="Life Care H"
                className="h-14 w-14 rounded-full object-cover bg-white p-1"
                width={56}
                height={56}
              />
              <div>
                <div className="font-display text-2xl">Life Care H</div>
                <div className="text-[10px] tracking-[0.35em] mt-1 uppercase text-slate-400">
                  Odisha
                </div>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-300">
              A grassroots social organization since 2002, empowering rural and marginalized communities across Odisha through health, education, livelihoods and environmental action.
            </p>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-3">Follow us</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-300 transition hover:border-primary hover:text-primary"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-300 transition hover:border-primary hover:text-primary"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/+919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-300 transition hover:border-primary hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-left">
            <p className="eyebrow text-slate-500 mb-4">Quick Links</p>
            <div className="space-y-3 text-sm text-slate-300">
              <Link to="/about" className="block transition hover:text-primary">About Us</Link>
              <Link to="/programs" className="block transition hover:text-primary">Programs</Link>
              <Link to="/impact" className="block transition hover:text-primary">Impact</Link>
              <Link to="/events" className="block transition hover:text-primary">Events</Link>
            </div>
          </div>

          <div className="text-left">
            <p className="eyebrow text-slate-500 mb-4">Contact</p>
            <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
              <p>lifecaretalcher@gmail.com</p>
              <p>Secretary: Chandan Kumar Amanta</p>
              <p>At-P.O. Kalama Chhuin, Via-Dera</p>
              <p>Dist-Angul, Odisha • PIN-759103</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-slate-500 text-xs sm:flex sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Life Care H. All rights reserved.</p>
          <p>Community-led progress for Odisha's villages, women and youth.</p>
        </div>
      </div>
    </footer>
  );
}
''',
    "src/components/FeaturedPrograms.tsx": '''import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PROGRAM_DETAILS, type ProgramDetail } from "@/data/programs";

function Row({ program, index }: { program: ProgramDetail; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const imageLeft = index % 2 === 1;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className={`order-1 ${imageLeft ? "md:order-1" : "md:order-2"}`}>
        <Link
          to={`/programs/${program.slug}`}
          className="block overflow-hidden rounded-2xl shadow-sm"
        >
          <img
            src={program.image}
            alt={program.alt}
            loading="lazy"
            className="h-full w-full object-cover aspect-[4/3] transition-transform duration-700 ease-out hover:scale-105"
          />
        </Link>
      </div>
      <div className={`order-2 ${imageLeft ? "md:order-2" : "md:order-1"}`}>
        <p className="eyebrow text-primary mb-4">{program.eyebrow}</p>
        <h3 className="font-display text-3xl md:text-4xl leading-[1.15] text-foreground">
          {program.title}
        </h3>
        <div className="h-px w-16 bg-foreground/20 my-6" />
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          {program.body}
        </p>
        <Link
          to={`/programs/${program.slug}`}
          className="btn-donate mt-8 inline-block"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export function FeaturedPrograms() {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="max-w-2xl mb-16 md:mb-24">
          <p className="eyebrow text-primary mb-5">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-[1.1]">
            Programs rooted in dignity, driven by community
          </h2>
        </div>
        <div className="space-y-24 md:space-y-36">
          {PROGRAM_DETAILS.map((p, i) => (
            <Row key={p.slug} program={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
''',
    "src/routes/__root.tsx": '''export {};
''',
    "src/router.tsx": '''export {};
''',
    "src/routeTree.gen.ts": '''export {};
''',
    "src/start.ts": '''export {};
''',
    "src/server.ts": '''export {};
''',
    "src/lib/api/example.functions.ts": '''export {};
''',
}

for path, content in files.items():
    file_path = root / path
    if not file_path.parent.exists():
        file_path.parent.mkdir(parents=True, exist_ok=True)
    file_path.write_text(content, encoding='utf-8')
print("rewritten", len(files), "files")
''