import { Link } from "react-router-dom";

const footerLinks = [
  { label: "About", to: "/#about" },
  { label: "Experience", to: "/#experience" },
  { label: "Projects", to: "/#projects" },
  { label: "Contact", to: "/#contact" },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="section-shell pb-14 pt-12 text-center">
      <nav className="mb-7 flex flex-wrap items-center justify-center gap-6 md:gap-11">
        {footerLinks.map((link) => (
          <Link key={link.label} to={link.to} className="text-3xl font-medium leading-none text-foreground/90 transition-colors duration-200 hover:text-foreground md:text-[2.05rem]">
            {link.label}
          </Link>
        ))}
      </nav>
      <p className="text-sm font-medium text-muted md:text-base">
        Copyright © {year} Sano Rodrigue. All Rights Reserved.
      </p>
    </footer>
  );
};
