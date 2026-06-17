import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logoImage from "@/assets/logo.jpg";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-100 py-12 text-left">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 text-left">
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
                {/* <div className="text-[10px] tracking-[0.35em] mt-1 uppercase text-slate-400">
                  Odisha
                </div> */}
              </div>
            </div>
            <h3 className="font-display text-base text-white mb-3">
              Empowering Communities Since 2002
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
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
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/+919778038181"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
                >
                  <FaWhatsapp className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-left">
            <p className="eyebrow text-slate-500 mb-2">Quick Links</p>
            <div className="w-12 h-px bg-primary mb-5"></div>
            <div className="space-y-3 text-sm text-slate-300">
              <Link
                to="/about"
                className="block transition duration-300 hover:text-primary hover:translate-x-1"
              >
                About Us
              </Link>
              <Link
                to="/programs"
                className="block transition duration-300 hover:text-primary hover:translate-x-1"
              >
                Programs
              </Link>
              <Link
                to="/impact"
                className="block transition duration-300 hover:text-primary hover:translate-x-1"
              >
                Impact
              </Link>
              <Link
                to="/events"
                className="block transition duration-300 hover:text-primary hover:translate-x-1"
              >
                Events
              </Link>
            </div>
          </div>

          <div className="text-left">
            <p className="eyebrow text-slate-500 mb-2">Contact</p>
            <div className="w-12 h-px bg-primary mb-5"></div>
            <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
              <p>lifecaretalcher@gmail.com</p>
              <p>Secretary: Chandan Kumar Amanta</p>
              <p>At-P.O. Kalama Chhuin, Via-Dera</p>
              <p>Dist-Angul, Odisha • PIN-759103</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-5 text-slate-500 text-xs sm:flex sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Life Care H. All rights reserved. |
            <a
              href="https://jrtechinnovators.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="ml-1 text-primary hover:underline"
            >
              Designed & Developed by JR Tech Innovators
            </a>
          </p>
          <p>Community-led progress for Odisha's villages, women and youth.</p>
        </div>
      </div>
    </footer>
  );
}
