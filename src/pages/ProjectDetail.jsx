import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { SEO } from "@/components/SEO";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <SEO title={project.title} description={project.description} image={project.heroImage} />

      <article className="section-shell section-spacing">
        <Link to="/projects" className="mb-8 inline-flex items-center gap-2 text-lg font-semibold text-muted transition-colors duration-200 hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <header className="mb-10 reveal space-y-4">
          <p className="section-label">Case Study</p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">{project.title}</h1>
          <p className="text-xl leading-relaxed text-muted md:text-2xl">{project.tagline}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="solid-btn">
              Live Demo
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="ghost-btn">
              Source Code
              <Github className="ml-2 h-4 w-4" />
            </a>
          </div>
        </header>

        <img
          src={project.heroImage}
          alt={project.title}
          width="1320"
          height="840"
          className="reveal mb-12 w-full rounded-[2rem] border border-border object-cover"
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <section className="reveal soft-card p-6 md:p-8" style={{ animationDelay: "100ms" }}>
            <h2 className="text-3xl font-bold">Problem</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{project.problem}</p>

            <h2 className="mt-8 text-3xl font-bold">Solution</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{project.solution}</p>

            <h2 className="mt-8 text-3xl font-bold">Results</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{project.results}</p>
          </section>

          <aside className="reveal space-y-6" style={{ animationDelay: "190ms" }}>
            <section className="soft-card p-6">
              <h3 className="text-2xl font-bold">Tech Stack</h3>
              <ul className="mt-4 space-y-2">
                {project.techStack.map((tech) => (
                  <li key={tech.name} className="text-lg text-muted">
                    {tech.icon} {tech.name}
                  </li>
                ))}
              </ul>
            </section>

            <section className="soft-card p-6">
              <h3 className="text-2xl font-bold">Key Features</h3>
              <ul className="mt-4 space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="text-lg text-muted">
                    • {feature}
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </article>
    </>
  );
};
