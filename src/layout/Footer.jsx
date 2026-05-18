import { Link } from "react-router-dom";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  { label: "About", to: "/#about" },
  { label: "Experience", to: "/#experience" },
  { label: "Projects", to: "/#projects" },
  { label: "Blog", to: "/#blog" },
  { label: "Contact", to: "/#contact" },
];

const socialLinks = [
  { href: "https://github.com/SanoRod00", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/rodrigue-sano-ab3849331", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:sanorod00@gmail.com", icon: Mail, label: "Email" },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="section-shell pb-14 pt-12">
      <div className="frost-card p-7 text-center">
        <nav className="mb-6 flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="rounded-full px-4 py-2 text-base font-semibold text-muted transition-colors duration-200 hover:bg-surface-muted hover:text-foreground md:text-lg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mb-6 flex items-center justify-center gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={item.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
            >
              <item.icon className="h-4.5 w-4.5" />
            </a>
          ))}
        </div>

        <div className="mb-4 flex justify-center">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-muted transition-all duration-200 hover:-translate-y-0.5 hover:text-foreground"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </button>
        </div>

        <p className="text-sm font-medium text-muted md:text-base">
          Copyright © {year} Sano Rodrigue. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
