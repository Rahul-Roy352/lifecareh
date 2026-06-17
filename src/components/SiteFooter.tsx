import { Link } from "react-router-dom";
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
              A grassroots social organization since 2002, empowering rural and marginalized
              communities across Odisha through health, education, livelihoods and environmental
              action.
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
              <Link to="/about" className="block transition hover:text-primary">
                About Us
              </Link>
              <Link to="/programs" className="block transition hover:text-primary">
                Programs
              </Link>
              <Link to="/impact" className="block transition hover:text-primary">
                Impact
              </Link>
              <Link to="/events" className="block transition hover:text-primary">
                Events
              </Link>
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
