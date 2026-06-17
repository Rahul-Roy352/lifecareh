import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {!isDark && <div aria-hidden className="h-[88px]" />}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors ${
          isDark
            ? "bg-black/30 backdrop-blur-md supports-[backdrop-filter]:bg-black/20"
            : "bg-background/85 backdrop-blur-md border-b border-border/60"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src={logoImage}
              alt="Life Care H"
              className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover bg-white"
              width={64}
              height={64}
            />
            <div className={`leading-none ${isDark ? "text-white" : "text-foreground"}`}>
              <div className="font-display text-xl lg:text-2xl tracking-wide whitespace-nowrap">
                Life Care H
              </div>
              <div className="text-[10px] tracking-[0.35em] mt-1 opacity-80">ODISHA</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8 whitespace-nowrap flex-1 justify-center">
            {NAV.map((n) => (
              <NavLink
                key={n.label}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors ${
                    isActive
                      ? "text-primary"
                      : isDark
                        ? "text-white/90 hover:text-primary"
                        : "text-foreground hover:text-primary"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <Link to="/contact" className="btn-donate hidden lg:inline-block shrink-0">
            Support Us
          </Link>

          <button
            className={`lg:hidden ${isDark ? "text-white" : "text-foreground"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            className={`lg:hidden border-t ${
              isDark ? "bg-black/95 border-white/10" : "bg-background border-border"
            }`}
          >
            <nav className="flex flex-col p-6 space-y-4">
              {NAV.map((n) => (
                <NavLink
                  key={n.label}
                  to={n.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-medium"
                      : isDark
                        ? "text-white"
                        : "text-foreground"
                  }
                >
                  {n.label}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-donate text-center"
              >
                Support Us
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
