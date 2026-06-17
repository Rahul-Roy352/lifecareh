import { Link } from "@tanstack/react-router";
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
            <Link
              key={n.label}
              to={n.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-primary" }}
              className={`text-sm tracking-wide transition-colors ${
                isDark ? "text-white/90 hover:text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="btn-donate hidden md:inline-block">Support Us</Link>
      </div>
    </header>
    </>
  );
}
