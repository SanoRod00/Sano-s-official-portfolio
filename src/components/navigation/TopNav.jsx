import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "About", to: "/#about" },
  { label: "Experience", to: "/#experience" },
  { label: "Projects", to: "/#projects" },
  { label: "Contact", to: "/#contact" },
];

export const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-border bg-card/95 px-5 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)] backdrop-blur-sm md:px-8">
        <Link to="/" className="text-3xl font-semibold tracking-tight text-foreground md:text-[2.35rem]">
          Sano Rodrigue
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-foreground/85 transition-colors duration-200 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="rounded-full border border-border p-2.5 text-foreground md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <nav className="mx-auto mt-3 flex w-full max-w-6xl flex-col gap-2 rounded-3xl border border-border bg-card p-4 shadow-[0_16px_28px_rgba(0,0,0,0.09)] md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-semibold text-foreground/90 transition-colors duration-200 hover:bg-foreground hover:text-background"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
};
