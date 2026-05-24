import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const featuredProjects = projects.slice(0, 4);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

export const Projects = () => {
  return (
    <section id="projects" className="section-shell section-spacing">
      <motion.header
        className="mb-14 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
      >
        <p className="section-label">Things I've Built</p>
        <h2 className="section-title">Projects</h2>
      </motion.header>

      <motion.div
        className="grid gap-7 sm:grid-cols-2"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {featuredProjects.map((project) => (
          <motion.article
            key={project.id}
            className="project-card group"
            variants={fadeUp}
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
                <h3 className="text-xl font-bold leading-snug tracking-tight md:text-2xl">
                  {project.title}
                </h3>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface-muted text-primary transition-all duration-300 group-hover:rotate-45 group-hover:border-primary/50 group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              {project.hackathonLabel && (
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  🏆 {project.hackathonLabel}
                </span>
              )}

              {project.role && (
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-surface-muted px-3 py-1 text-xs font-medium text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {project.role}
                </span>
              )}

              <p className="line-clamp-2 text-sm leading-relaxed text-muted">
                {project.tagline}
              </p>

              <div className="h-px bg-border" />

              <div className="flex gap-2.5">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ghost-btn flex-1 px-4 py-2.5 text-sm"
                  >
                    <Github className="mr-2 h-3.5 w-3.5" />
                    GitHub
                  </a>
                )}
                {project.devpostUrl ? (
                  <a
                    href={project.devpostUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="solid-btn flex-1 px-4 py-2.5 text-sm"
                  >
                    <ArrowUpRight className="mr-2 h-3.5 w-3.5" />
                    Devpost
                  </a>
                ) : project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="solid-btn flex-1 px-4 py-2.5 text-sm"
                  >
                    <ArrowUpRight className="mr-2 h-3.5 w-3.5" />
                    {project.liveLabel ?? "Live Demo"}
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        className="mt-12 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Link to="/projects" className="ghost-btn">
          View All Projects
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Link>
      </motion.div>
    </section>
  );
};
