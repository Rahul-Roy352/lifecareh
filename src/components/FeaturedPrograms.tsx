import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
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
          to="/programs/$slug"
          params={{ slug: program.slug }}
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
          to="/programs/$slug"
          params={{ slug: program.slug }}
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
