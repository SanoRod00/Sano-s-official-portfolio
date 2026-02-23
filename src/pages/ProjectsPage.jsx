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
          <p className="section-label">Browse My Recent</p>
          <h1 className="section-title">Projects</h1>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="reveal soft-card block p-5 transition-transform duration-200 hover:-translate-y-1"
              style={{ animationDelay: `${80 + index * 80}ms` }}
            >
              <img
                src={project.heroImage}
                alt={project.title}
                width="820"
                height="620"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full rounded-[1.4rem] border border-border object-cover"
              />

              <div className="mt-5 flex items-start justify-between gap-4">
                <h2 className="text-3xl font-bold leading-tight">{project.title}</h2>
                <ArrowUpRight className="h-5 w-5 shrink-0" />
              </div>

              <p className="mt-3 text-lg leading-relaxed text-muted">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.categories.map((category) => (
                  <span key={category} className="rounded-full border border-border px-3 py-1 text-sm font-medium text-muted">
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
