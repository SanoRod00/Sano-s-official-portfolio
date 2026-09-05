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
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:px-6 md:pt-4">
      <div
        className={`mx-auto flex w-full max-w-5xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 md:px-4 ${
          isScrolled
            ? "border-border/70 bg-surface/90 shadow-[0_12px_30px_-20px_rgba(26,23,20,0.55)] backdrop-blur-md"
            : "border-border/40 bg-surface/70 backdrop-blur-sm"
        }`}
      >
        <Link
          to="/"
          className="inline-flex items-center rounded-full px-3 py-1 text-base font-extrabold tracking-tight md:text-lg"
        >
          Sano Rodrigue
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === "/" && activeSection === item.id;
            return (
              <Link
                key={item.id}
                to={toSection(item.id)}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-3 py-1.5 text-sm tracking-[0.01em] transition-colors duration-200 ${
                  isActive
                    ? "font-bold text-foreground"
                    : "font-medium text-muted hover:text-foreground"
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
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-all duration-200 hover:bg-surface-muted hover:text-primary"
          >
            {theme === "dark" ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          </button>

          <Link to={toSection("contact")} className="hidden md:inline-flex items-center rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background transition-colors duration-200 hover:bg-foreground/85">
            Hire Me
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((curr) => !curr)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-all duration-200 hover:bg-surface-muted md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav className="mx-auto mt-2 flex w-full max-w-5xl flex-col gap-1 rounded-3xl border border-border/60 bg-surface/95 p-3 shadow-[0_18px_40px_-28px_rgba(26,23,20,0.6)] backdrop-blur md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={toSection(item.id)}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-2 py-3 text-base font-medium text-foreground transition-colors duration-200 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to={toSection("contact")}
            onClick={() => setIsOpen(false)}
            className="mt-1 w-full justify-center inline-flex items-center rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background transition-colors duration-200 hover:bg-foreground/85"
          >
            Hire Me
          </Link>
        </nav>
      ) : null}
    </header>
  );
};
