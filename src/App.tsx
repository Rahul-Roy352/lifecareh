import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/routes/index";
import About from "@/routes/about";
import Programs from "@/routes/programs";
import ProgramDetail from "@/routes/programs.$slug";
import Impact from "@/routes/impact";
import Events from "@/routes/events";
import Contact from "@/routes/contact";
import "./styles.css";

function NotFound() {
  return (
    <main className="bg-background min-h-screen text-foreground">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="eyebrow text-primary mb-4">Page Not Found</p>
        <h1 className="font-display text-5xl md:text-6xl mb-6">404</h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          The page you are looking for does not exist. Use the navigation above or return to the
          home page.
        </p>
      </div>
    </main>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:slug" element={<ProgramDetail />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
