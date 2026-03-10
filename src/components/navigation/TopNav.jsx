import { Link, useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const getInitialTheme = () => {
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [theme, setTheme] = useState(getInitialTheme);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-38% 0px -45% 0px", threshold: [0.2, 0.4, 0.65] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  const toSection = (id) => `/#${id}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-6">
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-border bg-surface/85 px-4 shadow-[0_10px_32px_rgba(10,20,40,0.12)] backdrop-blur-md transition-all duration-300 md:px-6 ${
          isScrolled ? "py-3" : "py-4"
        }`}
      >
        <Link to="/" className="inline-flex items-center gap-2 text-xl font-extrabold tracking-tight md:text-2xl">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent pulse-soft" />
          Sano Rodrigue
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-border bg-surface-muted p-1 md:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === "/" && activeSection === item.id;
            return (
              <Link
                key={item.id}
                to={toSection(item.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted hover:bg-surface hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle color theme"
            onClick={() => setTheme((curr) => (curr === "dark" ? "light" : "dark"))}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-muted text-foreground transition-colors duration-200 hover:border-primary/60 hover:text-primary"
          >
            {theme === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>

          <Link to={toSection("contact")} className="accent-btn hidden md:inline-flex">
            Hire Me
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((curr) => !curr)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-muted md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav className="mx-auto mt-3 flex w-full max-w-6xl flex-col gap-2 rounded-3xl border border-border bg-surface/95 p-4 shadow-[0_20px_30px_rgba(5,10,30,0.12)] backdrop-blur md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={toSection(item.id)}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-semibold text-foreground transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to={toSection("contact")}
            onClick={() => setIsOpen(false)}
            className="accent-btn mt-1 w-full"
          >
            Hire Me
          </Link>
        </nav>
      ) : null}
    </header>
  );
};
