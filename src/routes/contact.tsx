import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  UserCircle2,
  FileBadge,
  Clock,
  HandshakeIcon,
  HeartHandshake,
  HandCoins,
  Building2,
  GraduationCap,
  PackageOpen,
  Navigation,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useDonate } from "@/components/DonateModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/contact-hero.jpg";
import ctaImage from "@/assets/contact-cta.jpg";

const infoCards = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["At-P.O. Kalama Chhuin", "Via-Dera, Dist-Angul", "Odisha, PIN-759103"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["lifecaretalcher@gmail.com"],
    href: "mailto:lifecaretalcher@gmail.com",
  },
  {
    icon: UserCircle2,
    title: "Secretary",
    lines: ["Chandan Kumar Amanta", "Founder & Secretary"],
  },
  {
    icon: FileBadge,
    title: "Registration",
    lines: ["ANL-2125/121/2002-03", "Registered since 2002"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Mon–Fri · 9:30 – 18:00", "Sat · 10:00 – 14:00", "Sun · Closed"],
  },
  {
    icon: HandshakeIcon,
    title: "Ways To Partner",
    lines: ["CSR & institutional grants", "Volunteering & internships", "In-kind support"],
  },
];

const supportOptions = [
  {
    icon: HeartHandshake,
    title: "Volunteer",
    desc: "Join field teams in Angul, Puri or Cuttack and contribute your time and skills.",
    cta: "Join us",
  },
  {
    icon: HandCoins,
    title: "Donate",
    desc: "Fuel programmes in education, health, livelihoods and environment across Odisha.",
    cta: "Donate now",
    action: "donate" as const,
  },
  {
    icon: Building2,
    title: "CSR Partnership",
    desc: "Co-fund and co-design measurable community programmes with your organisation.",
    cta: "Partner with us",
  },
  {
    icon: GraduationCap,
    title: "Internship",
    desc: "Learn on the ground with our field teams across rural Odisha.",
    cta: "Apply",
  },
  {
    icon: PackageOpen,
    title: "In-kind Support",
    desc: "Books, computers, medical supplies and saplings all make a real difference.",
    cta: "Contribute",
  },
];

const faqs = [
  {
    q: "How can I volunteer with Life Care H?",
    a: "Write to us at lifecaretalcher@gmail.com with your background and areas of interest. We onboard volunteers throughout the year for field, research and communication roles.",
  },
  {
    q: "How can I donate?",
    a: "Use the Donate button in the navigation or the floating action button. We accept UPI and bank transfers, and issue receipts for eligible contributions.",
  },
  {
    q: "How long does it take to receive a reply?",
    a: "We typically respond within two working days. Field visit requests may take a little longer to coordinate with our teams.",
  },
  {
    q: "Where does Life Care H operate?",
    a: "We are headquartered in Angul, Odisha and run programmes across Angul, Puri and Cuttack districts, with community partners in surrounding villages.",
  },
  {
    q: "How can organisations partner with us?",
    a: "We welcome CSR partnerships, institutional grants and in-kind collaborations. Reach out through the form below and our team will schedule an introductory call.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const { open: openDonate } = useDonate();

  useEffect(() => {
    document.title = "Contact — Life Care H";
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    const params = new URLSearchParams({
      subject: `[Life Care H] ${data.get("subject") || "Website enquiry"}`,
      body: `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\n\n${data.get("message")}`,
    });
    setTimeout(() => {
      window.location.href = `mailto:lifecaretalcher@gmail.com?${params.toString()}`;
      setStatus("sent");
      form.reset();
    }, 900);
  };

  return (
    <main className="bg-background">
      <SiteHeader variant="dark" />

      {/* HERO */}
      <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          src={heroImage}
          alt="Life Care H volunteers with rural community"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-20 md:pb-28">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="eyebrow text-white/80 mb-6"
            >
              Contact
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.9 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white max-w-4xl"
            >
              Let's build stronger communities together.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.9 }}
              className="mt-6 max-w-2xl text-base md:text-lg text-white/85 leading-relaxed"
            >
              Whether you want to volunteer, donate, partner with us, or simply learn more about our
              work, we'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-primary mb-4">Reach us</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
              A grassroots team, always within reach.
            </h2>
          </div>
          <motion.div
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {infoCards.map((card) => {
              const Icon = card.icon;
              const Wrapper: any = card.href ? "a" : "div";
              return (
                <motion.div key={card.title} variants={fadeUp}>
                  <Wrapper
                    {...(card.href ? { href: card.href } : {})}
                    className="group h-full flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] hover:border-primary/40"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 font-display text-xl text-foreground">{card.title}</h3>
                    <div className="mt-3 space-y-1 text-sm text-muted-foreground leading-relaxed">
                      {card.lines.map((l) => (
                        <p key={l}>{l}</p>
                      ))}
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-3xl border border-border shadow-[0_40px_80px_-40px_rgba(0,0,0,0.3)]"
          >
            <div className="grid lg:grid-cols-[1.6fr_1fr]">
              <div className="relative aspect-[16/10] lg:aspect-auto min-h-[320px]">
                <iframe
                  title="Life Care H location"
                  src="https://www.google.com/maps?q=Kalama+Chhuin+Dera+Angul+Odisha&output=embed"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="bg-card p-8 md:p-10 flex flex-col justify-center">
                <p className="eyebrow text-primary mb-3">Visit us</p>
                <h3 className="font-display text-2xl md:text-3xl text-foreground leading-tight">
                  Field office in Angul, Odisha
                </h3>
                <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  Field visits to Puri & Cuttack programmes can be arranged on request. We're happy
                  to host partners, researchers and volunteers.
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Kalama+Chhuin+Dera+Angul+Odisha"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <Navigation className="h-4 w-4" /> Get directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow text-primary mb-4">Send us a message</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
              We typically reply within two working days.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Share a little about yourself and how you'd like to engage with Life Care H. Our team
              will personally get back to you.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <a
                href="mailto:lifecaretalcher@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition"
              >
                <Mail className="h-4 w-4 text-primary" /> lifecaretalcher@gmail.com
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> Kalama Chhuin, Angul, Odisha
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-background p-6 md:p-10 shadow-[0_40px_80px_-45px_rgba(0,0,0,0.3)]"
          >
            {status === "sent" ? (
              <div className="flex flex-col items-center text-center py-10">
                <CheckCircle2 className="h-14 w-14 text-primary" />
                <h3 className="mt-4 font-display text-2xl text-foreground">Message sent</h3>
                <p className="mt-2 text-muted-foreground max-w-sm">
                  Thank you for reaching out. Your email client has been opened with your message —
                  we'll reply shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2">
                <FloatingInput name="name" label="Full name" required />
                <FloatingInput name="email" type="email" label="Email address" required />
                <FloatingInput name="phone" type="tel" label="Phone number" />
                <FloatingInput name="subject" label="Subject" />
                <div className="sm:col-span-2">
                  <FloatingInput name="message" label="Your message" as="textarea" required />
                </div>
                <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-2">
                  <p className="text-xs text-muted-foreground">
                    By submitting you agree to be contacted by Life Care H.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      "Send message"
                    )}
                  </button>
                </div>
              </div>
            )}
          </motion.form>
        </div>
      </section>

      {/* WAYS TO SUPPORT */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-primary mb-4">Get involved</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
              Ways you can support.
            </h2>
          </div>
          <motion.div
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {supportOptions.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  className="group h-full flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] hover:border-primary/40"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                    {s.desc}
                  </p>
                  {s.action === "donate" ? (
                    <button
                      onClick={() => openDonate()}
                      className="mt-6 self-start text-sm font-medium text-primary hover:underline"
                    >
                      {s.cta} →
                    </button>
                  ) : (
                    <a
                      href="mailto:lifecaretalcher@gmail.com"
                      className="mt-6 self-start text-sm font-medium text-primary hover:underline"
                    >
                      {s.cta} →
                    </a>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <p className="eyebrow text-primary mb-4">FAQ</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
              Frequently asked questions.
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-border bg-card px-6 md:px-10"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-display text-base md:text-lg text-foreground py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden bg-fixed bg-cover bg-center py-24 md:py-36"
        style={{ backgroundImage: `url(${ctaImage})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white"
        >
          <h2 className="font-display text-4xl md:text-6xl leading-[1.1]">
            Together we can create lasting change.
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Every partnership, every volunteer, and every contribution helps us empower communities
            across Odisha.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/10 px-8 py-3.5 text-sm font-medium text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white hover:text-foreground"
            >
              Contact us
            </Link>
            <button
              onClick={() => openDonate()}
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Donate now
            </button>
          </div>
        </motion.div>
      </section>

      <SiteFooter />
    </main>
  );
}

function FloatingInput({
  label,
  name,
  type = "text",
  required,
  as,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "textarea";
}) {
  const [val, setVal] = useState("");
  const filled = val.length > 0;
  const base =
    "peer w-full rounded-xl border border-border bg-background px-4 pt-6 pb-2 text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20";
  return (
    <label className="relative block">
      {as === "textarea" ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className={`${base} resize-none`}
          placeholder=" "
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className={base}
          placeholder=" "
        />
      )}
      <span
        className={`pointer-events-none absolute left-4 text-muted-foreground transition-all duration-200 ${
          filled ? "top-2 text-xs text-primary" : "top-4 text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary"
        }`}
      >
        {label}
        {required ? " *" : ""}
      </span>
    </label>
  );
}
