import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SEO } from "@/components/SEO";

export const ProjectsPage = () => {
  return (
    <>
      <SEO title="Projects" description="Explore my latest work and case studies." />

      <section className="section-shell section-spacing">
        <header className="mb-14 text-center reveal">
          <p className="section-label">Portfolio Showcase</p>
          <h1 className="section-title">Projects & Case Studies</h1>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="reveal soft-card hover-lift block overflow-hidden p-5 shadow-sm"
              style={{ animationDelay: `${80 + index * 80}ms` }}
            >
              <div className="relative overflow-hidden rounded-[1.25rem] border border-border">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  width="820"
                  height="620"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent opacity-70" />

                <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                  {project.categories.slice(0, 2).map((category) => (
                    <span
                      key={category}
                      className="rounded-full border border-white/35 bg-black/35 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <h2 className="text-2xl font-bold leading-tight md:text-3xl">{project.title}</h2>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-primary" />
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.categories.map((category) => (
                  <span key={category} className="chip">
                    {category}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
