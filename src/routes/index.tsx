import { useEffect } from "react";
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

    const els = Array.from(document.querySelectorAll(".impact-reveal")) as HTMLElement[];
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("opacity-100", "translate-y-0");
            el.classList.remove("opacity-0", "translate-y-6");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    els.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-6");
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <main>
      <section className="relative min-h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroMarch})` }}
          role="img"
          aria-label="Community at work"
        />
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
            <Link to="/programs" className="btn-donate">
              Our Programs
            </Link>
            <Link
              to="/contact"
              className="btn-donate"
              style={{ backgroundColor: "transparent", border: "1px solid white" }}
            >
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
              From village collectives to plantations, our programs are co-designed with the
              families and panchayats we serve — practical, locally rooted and measured by outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/15">
            {[
              {
                t: "Community Empowerment",
                b: "Village collectives, grassroots leadership and rights awareness.",
              },
              {
                t: "Agriculture & Livelihood",
                b: "Organic farming, food processing and FPO linkages for 1,000+ farmers.",
              },
              {
                t: "Health, Water & Sanitation",
                b: "Free medical camps, WASH drives and women's health awareness.",
              },
              {
                t: "Education & Youth",
                b: "Books, school kits and computer literacy for 700+ children.",
              },
              {
                t: "Environment",
                b: "30,000+ saplings planted and active campaigns against plastic and e-waste.",
              },
              {
                t: "Cultural & Awareness",
                b: "Artisan exhibitions, consumer rights and micro-insurance literacy.",
              },
            ].map((c) => (
              <div key={c.t} className="bg-card p-8">
                <div className="h-px w-10 bg-primary mb-5" />
                <h3 className="font-display text-2xl text-foreground">{c.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/programs" className="btn-donate inline-block">
              Explore all programs
            </Link>
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
              <img
                src={testimonialBg1}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width={1024}
                height={768}
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10">
                <blockquote className="font-display italic text-2xl md:text-3xl leading-snug text-white">
                  "Our collective gave us a voice in the panchayat. Today, twenty-eight families in
                  our village have a steady income."
                </blockquote>
                <figcaption className="mt-8">
                  <div className="text-white font-medium">Sunita Behera</div>
                  <div className="text-sm text-white/70 mt-1">Village Collective Member · Puri</div>
                </figcaption>
              </div>
            </figure>
            <figure className="relative overflow-hidden rounded-sm min-h-[420px] flex flex-col justify-end p-10">
              <img
                src={testimonialBg2}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width={1024}
                height={768}
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10">
                <blockquote className="font-display italic text-2xl md:text-3xl leading-snug text-white">
                  "The food-processing training changed how I see my farm. Surplus mangoes are now
                  pickles that sell year-round."
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
            {[
              "Panchayat Raj",
              "NABARD",
              "DRDA Angul",
              "KVK Cuttack",
              "Forest Dept.",
              "District Admin.",
            ].map((p) => (
              <div
                key={p}
                className="font-display text-lg md:text-xl text-foreground/60 text-center"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[80vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${joinUs})` }}
          role="img"
          aria-label="Community gathering"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl items-center px-8 py-24">
          <div className="ml-auto max-w-2xl text-white">
            <p className="eyebrow mb-6">Our Vision</p>
            <div className="h-px w-full bg-white/40 mb-10" />
            <h2 className="font-display text-3xl md:text-5xl leading-[1.25]">
              An indiscriminate society built through the participation and involvement of the
              target people and local communities.
            </h2>
            <Link to="/about" className="btn-donate mt-12 inline-block">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      <section className="py-[100px] md:py-[140px]" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="mx-auto max-w-6xl px-8">
          <p className="eyebrow text-primary mb-4 impact-reveal">OUR IMPACT</p>
          <h2 className="font-display text-3xl md:text-4xl leading-[1.15] text-foreground max-w-3xl impact-reveal">
            Creating Meaningful Change Across Odisha
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl impact-reveal">
            Through community-driven initiatives, education support, healthcare awareness,
            environmental activities, and volunteer engagement, we are working to build stronger and
            more sustainable communities throughout Odisha.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: "10,000+", t: "Lives Reached" },
              { n: "50+", t: "Villages Supported" },
              { n: "25+", t: "Community Programs" },
              { n: "500+", t: "Volunteers Engaged" },
            ].map((c) => (
              <div
                key={c.t}
                className="impact-reveal bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-2"
              >
                <div className="font-display text-4xl md:text-5xl text-foreground">{c.n}</div>
                <div className="eyebrow text-muted-foreground mt-3">{c.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${donate})` }}
          role="img"
          aria-label="Support our cause"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-8 py-24 text-center text-white">
          <p className="eyebrow mb-8 text-white/85">Stand With Us</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.15] max-w-4xl">
            Help us empower communities across Odisha
          </h2>
          <Link to="/contact" className="btn-donate mt-12">
            Contact Us
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
