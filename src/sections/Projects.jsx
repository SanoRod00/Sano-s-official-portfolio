import { projects } from "@/data/projects";

const featuredProjects = projects.slice(0, 3);

export const Projects = () => {
  return (
    <section id="projects" className="section-shell section-spacing">
      <header className="mb-14 text-center reveal">
        <p className="section-label">Browse My Recent</p>
        <h2 className="section-title">Projects</h2>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <article
            key={project.id}
            className="reveal soft-card p-5"
            style={{ animationDelay: `${80 + index * 100}ms` }}
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

            <h3 className="mt-5 text-center text-4xl font-bold leading-tight">{project.title}</h3>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="ghost-btn px-6 py-2.5 text-sm"
              >
                GitHub
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="ghost-btn px-6 py-2.5 text-sm"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
