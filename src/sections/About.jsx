import { Award, Users } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Experience",
    subtitle: "3+ years",
    detail: "Frontend Development",
  },
  {
    icon: Users,
    title: "Education",
    subtitle: "B.Sc. Software Engineering",
    detail: "Continuous learning mindset",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-shell section-spacing">
      <header className="mb-14 text-center reveal">
        <p className="section-label">Get To Know More</p>
        <h2 className="section-title">About Me</h2>
      </header>

      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="reveal overflow-hidden rounded-[2rem] border border-border bg-card" style={{ animationDelay: "60ms" }}>
          <img
            src="/profile-photo.jpg"
            alt="Portrait of Sano Rodrigue"
            width="900"
            height="1100"
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>

        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <article
                key={item.title}
                className="reveal soft-card p-6 text-center"
                style={{ animationDelay: `${120 + index * 90}ms` }}
              >
                <item.icon className="mx-auto mb-3 h-6 w-6" />
                <h3 className="text-3xl font-bold leading-tight">{item.title}</h3>
                <p className="mt-1 text-xl font-semibold text-muted">{item.subtitle}</p>
                <p className="text-lg text-muted">{item.detail}</p>
              </article>
            ))}
          </div>

          <p className="reveal text-lg leading-relaxed text-muted md:text-xl" style={{ animationDelay: "250ms" }}>
            I build web interfaces that feel clean, fast, and dependable. My focus is
            performance-first React architecture, maintainable component systems, and
            thoughtful UX details that make products easier to use.
          </p>
        </div>
      </div>
    </section>
  );
};
