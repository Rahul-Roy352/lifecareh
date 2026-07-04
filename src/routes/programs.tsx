import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroBg from "@/assets/join-us.jpg";
import imgWomen from "@/assets/program-women.jpg";
import imgAgri from "@/assets/program-agriculture.jpg";
import imgHealth from "@/assets/program-health.jpg";
import imgEdu from "@/assets/program-education.jpg";
import imgEnv from "@/assets/program-environment.jpg";
import imgCultural from "@/assets/program-cultural.jpg";

type Card = { title: string; points: string[] };
type Section = {
  slug: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  cards: Card[];
};

const SECTIONS: Section[] = [
  {
    slug: "community-empowerment",
    number: "01",
    eyebrow: "Women Empowerment & Skill Development",
    title: "Empowering women through skills and self-reliance",
    description:
      "Strengthening women's livelihoods through Self Help Groups, vocational training, handicrafts, coir production, and entrepreneurship.",
    image: imgWomen,
    alt: "Women participating in a Self Help Group meeting",
    cards: [
      { title: "SHG Promotion & Formation", points: ["450 women engaged in Puri district", "Group savings", "Income generation"] },
      { title: "Coir Training Program", points: ["700 women", "20 SHGs", "Eco-friendly coir products"] },
      { title: "Training on Handicrafts", points: ["16 camps", "160 artisans", "Cane, bamboo, terracotta & appliqué"] },
      { title: "Vocational Training", points: ["529 unemployed youth and women", "Practical skills for livelihoods"] },
      { title: "Skill Development for SC/ST/OBC", points: ["27 training programmes", "800 beneficiaries", "Carpentry, masonry & tailoring"] },
    ],
  },
  {
    slug: "agriculture-livelihood",
    number: "02",
    eyebrow: "Agriculture & Livelihood",
    title: "Sustainable farming, stronger rural livelihoods",
    description:
      "Promoting sustainable farming and improving rural livelihoods through modern agricultural practices and food-processing enterprise.",
    image: imgAgri,
    alt: "Farmers working in agricultural fields",
    cards: [
      { title: "Sustainable Agriculture Program", points: ["30 workshops", "1,000 farmers", "Organic farming", "Soil conservation", "Modern agri-technology"] },
      { title: "Food Processing Training", points: ["20 training camps", "~1,000 beneficiaries", "Food preservation", "Value addition"] },
    ],
  },
  {
    slug: "health-water-sanitation",
    number: "03",
    eyebrow: "Health, Water & Sanitation",
    title: "Healthier homes, safer communities",
    description:
      "Improving public health through free healthcare services, sanitation awareness, and access to safe drinking water.",
    image: imgHealth,
    alt: "Doctors conducting a rural health camp",
    cards: [
      { title: "Health Program", points: ["19 health camps", "850+ beneficiaries", "Free medical check-ups", "Free medicines"] },
      { title: "Water & Sanitation Program", points: ["Safe drinking water awareness", "Proper waste disposal", "Waterborne disease prevention"] },
    ],
  },
  {
    slug: "education-environment",
    number: "04",
    eyebrow: "Education & Youth",
    title: "Learning, digital literacy and opportunity",
    description:
      "Supporting education and digital literacy for underprivileged children and rural youth across Odisha.",
    image: imgEdu,
    alt: "Children studying in a classroom",
    cards: [
      { title: "Education Program", points: ["700 underprivileged children", "Free books", "Study materials", "School bags"] },
      { title: "Computer Education Program", points: ["Four-month course", "MS Office", "Typing", "Internet usage", "Rural youth"] },
    ],
  },
  {
    slug: "environment-awareness",
    number: "05",
    eyebrow: "Environment & Awareness",
    title: "Protecting nature, protecting people",
    description:
      "Protecting nature through plantation drives, awareness campaigns and consumer education.",
    image: imgEnv,
    alt: "Community tree plantation drive",
    cards: [
      { title: "Social Forestry & Plantation", points: ["30,000 saplings", "Mango", "Eucalyptus", "Akashi"] },
      { title: "National Environment Awareness", points: ["20 campaigns", "700 participants", "Plastic pollution awareness", "Natural resource conservation"] },
      { title: "Awareness on Electronic Waste", points: ["E-waste awareness", "Safe disposal methods"] },
      { title: "Consumer & Micro-Insurance", points: ["Consumer rights", "Safe online shopping", "Financial security", "Thousands of beneficiaries"] },
    ],
  },
  {
    slug: "cultural-events",
    number: "06",
    eyebrow: "Cultural Events",
    title: "Celebrating Odisha's living heritage",
    description:
      "Preserving Odisha's rich cultural heritage while supporting local artisans and community talent.",
    image: imgCultural,
    alt: "Traditional cultural performance",
    cards: [
      { title: "Cultural Program", points: ["Dance", "Music", "Drama", "Talent development", "Teamwork", "Social harmony"] },
      { title: "Gandhi Silpa Bajara", points: ["Exhibition for artisans", "Handmade products", "Handlooms", "SHG participation"] },
    ],
  },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
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
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

function SectionBlock({ section, index }: { section: Section; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const imageLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
    >
      <div className={`lg:col-span-6 ${imageLeft ? "lg:order-1" : "lg:order-2"}`}>
        <div className="lg:sticky lg:top-24">
          <div
            className={`relative overflow-hidden rounded-sm shadow-[0_30px_60px_-25px_rgba(0,0,0,0.35)] group transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src={section.image}
              alt={section.alt}
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover aspect-[4/3] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute top-5 left-5 rounded-none px-4 py-1.5 text-xs tracking-[0.25em] font-medium text-primary-foreground bg-primary">
              {section.number}
            </div>
          </div>
        </div>
      </div>

      <div className={`lg:col-span-6 flex flex-col ${imageLeft ? "lg:order-2" : "lg:order-1"}`}>
        <p
          className={`eyebrow text-primary mb-4 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {section.eyebrow}
        </p>
        <h2
          className={`font-display text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-foreground transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: visible ? "80ms" : "0ms" }}
        >
          {section.title}
        </h2>
        <div
          className={`h-px w-16 my-6 bg-primary origin-left transition-transform duration-700 ease-out ${
            visible ? "scale-x-100" : "scale-x-0"
          }`}
          style={{ transitionDelay: visible ? "180ms" : "0ms" }}
        />
        <p
          className={`text-base md:text-lg leading-relaxed text-muted-foreground transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: visible ? "240ms" : "0ms" }}
        >
          {section.description}
        </p>

        <div className="mt-8 grid sm:grid-cols-2 gap-5 auto-rows-fr">
          {section.cards.map((c, i) => (
            <div
              key={c.title}
              className={`h-full flex flex-col rounded-sm border border-border bg-card p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.22)] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: visible ? `${340 + i * 90}ms` : "0ms" }}
            >
              <h3 className="font-display text-lg text-foreground leading-snug">{c.title}</h3>
              <div className="h-px w-8 my-3 bg-primary" />
              <ul className="space-y-1.5">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full flex-shrink-0 bg-primary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Link
          to={`/programs/${section.slug}`}
          className={`btn-donate mt-10 self-start transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: visible ? `${380 + section.cards.length * 90}ms` : "0ms" }}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default function Programs() {
  useEffect(() => {
    document.title = "Our Programs — Life Care H";
  }, []);

  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroBg})` }}
          role="img"
          aria-label="Community programmes across Odisha"
        />
        <div className="absolute inset-0 bg-black/60" />
        <SiteHeader variant="dark" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 md:px-8 py-24 text-white">
          <p className="eyebrow mb-6 text-white/80">Our Work · 2025–2026</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl">
            Our Programs &amp; Impact
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/85 leading-relaxed font-display italic">
            Empowering communities across Odisha through education, healthcare, livelihood,
            environment, women's empowerment, and cultural development.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-4xl px-6 md:px-8 text-center">
          <p className="eyebrow text-primary mb-5">What We Do</p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.15] text-foreground">
            Programs rooted in community, driven by impact
          </h2>
          <div className="h-px w-16 mx-auto my-8 bg-primary" />
          <p className="text-lg leading-relaxed text-muted-foreground">
            LIFE CARE (H) works with rural communities, women, children, farmers, artisans and youth
            through sustainable development programmes that improve livelihoods, education, health
            and environmental awareness.
          </p>
        </div>
      </section>

      {/* Program sections */}
      <section className="pb-24 md:pb-36">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8 space-y-28 md:space-y-40">
          {SECTIONS.map((s, i) => (
            <SectionBlock key={s.slug} section={s} index={i} />
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative min-h-[60vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroBg})` }}
          role="img"
          aria-label=""
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-6 md:px-8 py-24 text-center text-white">
          <p className="eyebrow mb-6 text-white/80">Stand With Us</p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.15]">
            Partner with us to reach the next village
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/85 font-display italic leading-relaxed max-w-2xl">
            Every programme is powered by donors, volunteers and local partners who believe in
            dignified, community-led change.
          </p>
          <Link to="/contact" className="btn-donate mt-10">
            Get in Touch
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
