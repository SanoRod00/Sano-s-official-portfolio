import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use passive listener for performance
      // Threshold 20px to trigger state change earlier for smooth feel
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${isScrolled ? "scale-95" : "scale-100"
          }`}
      >
        <nav
          className={`
            relative flex items-center justify-between w-full max-w-5xl
            backdrop-blur-xl border border-white/10 shadow-lg rounded-full
            transition-all duration-300
            ${isScrolled ? "bg-black/80 py-2.5 px-4" : "bg-black/50 py-3 px-6"}
            ${isMobileMenuOpen ? "rounded-2xl" : "rounded-full"}
          `}
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight hover:text-primary transition-colors pl-2"
            aria-label="Home"
          >
            PM<span className="text-primary">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <ul className="flex items-center gap-1">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                    {/* Animated Underline */}
                    <span className="absolute inset-x-4 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center rounded-full opacity-80" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block pr-1">
            <Button size="sm" className="rounded-full px-5">
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground cursor-pointer hover:bg-white/5 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
            fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl md:hidden
            transition-all duration-300 ease-in-out
            ${isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
          }
        `}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          <ul className="flex flex-col items-center gap-6 w-full max-w-sm">
            {navLinks.map((link, index) => (
              <li key={index} className="w-full text-center">
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-2xl font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            size="lg"
            className="w-full max-w-sm rounded-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </>
  );
};
