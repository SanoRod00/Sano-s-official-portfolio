import { Linkedin, Mail } from "lucide-react";

const contacts = [
  {
    label: "sanorod00@gmail.com",
    href: "mailto:sanorod00@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: Linkedin,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="section-shell section-spacing">
      <div className="mx-auto max-w-3xl text-center">
        <header className="mb-9 reveal">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Contact Me</h2>
        </header>

        <div className="reveal soft-card flex flex-col items-center justify-center gap-3 px-4 py-4 sm:flex-row sm:gap-8" style={{ animationDelay: "120ms" }}>
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-3 rounded-full px-4 py-2 text-xl font-medium text-foreground transition-colors duration-200 hover:text-muted"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background">
                <item.icon className="h-4 w-4" />
              </span>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
