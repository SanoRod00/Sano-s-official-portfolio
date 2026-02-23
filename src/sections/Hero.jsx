import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.linkedin.com",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://github.com",
    label: "GitHub",
    icon: Github,
  },
];

export const Hero = () => {
  return (
    <section className="section-shell section-spacing">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="reveal mx-auto w-full max-w-[420px] lg:max-w-[470px]">
          <div className="overflow-hidden rounded-full border border-border bg-card p-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <img
              src="/hero-profile.jpg"
              alt="Sano Rodrigue"
              width="940"
              height="940"
              className="aspect-square w-full rounded-full object-cover"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="reveal space-y-6 text-center lg:text-left" style={{ animationDelay: "120ms" }}>
          <p className="text-xl font-medium text-muted md:text-2xl">Hello, I'm</p>
          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">Sano Rodrigue</h1>
          <p className="text-3xl font-semibold text-muted md:text-5xl">Frontend Developer</p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 lg:justify-start">
            <a href="#contact" className="ghost-btn" aria-label="Contact information">
              Contact Info
            </a>
            <a href="#projects" className="solid-btn" aria-label="View projects">
              View Projects
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 pt-2 lg:justify-start">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background"
              >
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
