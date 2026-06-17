import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SiteFooter } from "@/components/SiteFooter";
import { getProgramBySlug, PROGRAM_DETAILS, type ProgramDetail } from "@/data/programs";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = getProgramBySlug(params.slug);
    if (!program) throw notFound();
    return { program };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.program;
    const title = p ? `${p.title} — Life Care H` : "Program — Life Care H";
    const description = p?.body ?? "Life Care H programs across Odisha.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(p ? [{ property: "og:image", content: p.image }] : []),
      ],
    };
  },
  notFoundComponent: () => (
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
  ),
  component: ProgramDetailPage,
});

function ProgramDetailPage() {
  const { program } = Route.useLoaderData() as { program: ProgramDetail };
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
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary shrink-0"
                  />
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
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {o.label}
                    </dt>
                    <dd className="mt-2 font-display text-3xl text-foreground">
                      {o.value}
                    </dd>
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
                to="/programs/$slug"
                params={{ slug: p.slug }}
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
