import { useEffect, useState } from "react";
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
              At-P.O. Kalama Chhuin
              <br />
              Via-Dera, Dist-Angul
              <br />
              Odisha, PIN-759103
              <br />
              India
            </p>
          </div>
          <div className="space-y-10">
            <div>
              <p className="eyebrow text-primary mb-4">Email</p>
              <div className="h-px w-16 bg-foreground/30 mb-6" />
              <a
                href="mailto:lifecaretalcher@gmail.com"
                className="text-lg text-foreground hover:text-primary"
              >
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
              <div className="flex justify-between">
                <dt>Monday – Friday</dt>
                <dd className="text-muted-foreground">9:30 – 18:00</dd>
              </div>
              <div className="flex justify-between">
                <dt>Saturday</dt>
                <dd className="text-muted-foreground">10:00 – 14:00</dd>
              </div>
              <div className="flex justify-between">
                <dt>Sunday</dt>
                <dd className="text-muted-foreground">Closed</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-muted-foreground">
              Field visits to Puri & Cuttack programmes can be arranged on request.
            </p>
          </div>
          <div>
            <p className="eyebrow text-primary mb-4">Ways To Partner</p>
            <div className="h-px w-16 bg-foreground/30 mb-6" />
            <ul className="space-y-4 text-foreground">
              <li>
                <span className="font-medium">CSR & Institutional grants</span>
                <p className="text-sm text-muted-foreground mt-1">
                  Co-fund programmes in education, livelihoods or environment.
                </p>
              </li>
              <li>
                <span className="font-medium">Volunteering & internships</span>
                <p className="text-sm text-muted-foreground mt-1">
                  Join field teams in Angul, Puri or Cuttack districts.
                </p>
              </li>
              <li>
                <span className="font-medium">In-kind support</span>
                <p className="text-sm text-muted-foreground mt-1">
                  Books, computers, medical supplies and saplings.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-8">
          <p className="eyebrow text-primary mb-4">Send Us A Message</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            We typically reply within two working days.
          </h2>
          {submitted ? (
            <div className="rounded-3xl border border-primary bg-primary/10 p-8 text-foreground">
              Thank you — we have received your message and will be in touch shortly.
            </div>
          ) : (
            <form
              className="mt-10 space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <label className="block">
                  <span className="text-sm text-muted-foreground">Name</span>
                  <input
                    required
                    type="text"
                    className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:border-primary"
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-muted-foreground">Email</span>
                  <input
                    required
                    type="email"
                    className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:border-primary"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-sm text-muted-foreground">Subject</span>
                <input
                  type="text"
                  className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:border-primary"
                />
              </label>
              <label className="block">
                <span className="text-sm text-muted-foreground">Message</span>
                <textarea
                  required
                  rows={6}
                  className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:border-primary"
                />
              </label>
              <button type="submit" className="btn-donate">
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
