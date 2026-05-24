import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SEO } from "@/components/SEO";

const MotionLink = motion.create(Link);

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const ProjectsPage = () => {
  return (
    <>
      <SEO title="Projects" description="A look at what I've built: from hackathon winners to production apps." />

      <section className="section-shell section-spacing">
        <header className="mb-14 text-center reveal">
          <p className="section-label">My Work</p>
          <h1 className="section-title">Projects</h1>
        </header>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <MotionLink
              key={project.id}
              to={`/projects/${project.slug}`}
              className="project-card group block"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-[1.65rem]">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  width="820"
                  height="512"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/10 to-transparent" />

                <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
                  {project.categories.slice(0, 2).map((cat) => (
                    <span
                      key={cat}
                      className="rounded-full border border-white/30 bg-black/45 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {project.statusBadge && (
                  <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-black/55 px-3 py-1 text-[11px] font-semibold text-amber-300 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                    {project.statusBadge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold leading-snug tracking-tight">
                      {project.title}
                    </h2>

                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.hackathonLabel && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                          🏆 {project.hackathonLabel}
                        </span>
                      )}
                      {project.role && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface-muted px-2.5 py-0.5 text-[11px] font-medium text-muted">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {project.role}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface-muted text-primary transition-all duration-300 group-hover:rotate-45 group-hover:border-primary/50 group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <p className="line-clamp-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="h-px bg-border" />

                <div className="flex flex-wrap gap-2">
                  {project.categories.map((cat) => (
                    <span key={cat} className="chip">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </MotionLink>
          ))}
        </div>
      </section>
    </>
  );
};
