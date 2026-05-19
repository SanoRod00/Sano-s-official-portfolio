import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const featuredProjects = projects.slice(0, 4);

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
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
        <p className="section-label">Browse My Recent</p>
        <h2 className="section-title">Projects</h2>
      </motion.header>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {featuredProjects.map((project) => (
          <motion.article
            key={project.id}
            className="soft-card hover-lift group overflow-hidden p-5 shadow-sm"
            variants={fadeUp}
          >
            <div className="relative overflow-hidden rounded-[1.35rem] border border-border">
              <img
                src={project.heroImage}
                alt={project.title}
                width="820"
                height="620"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-70" />

              <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                {project.categories.slice(0, 2).map((category) => (
                  <span key={category} className="rounded-full border border-white/35 bg-black/35 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                    {category}
                  </span>
                ))}
              </div>

              {project.statusBadge && (
                <span className="absolute right-3 top-3 rounded-full border border-amber-400/40 bg-amber-400/20 px-2.5 py-1 text-[11px] font-semibold text-amber-300 backdrop-blur">
                  {project.statusBadge}
                </span>
              )}
            </div>

            <h3 className="mt-5 text-center text-3xl font-bold leading-tight md:text-4xl">{project.title}</h3>

            {project.hackathonLabel && (
              <p className="mt-1 text-center text-[11px] font-semibold uppercase tracking-wider text-primary/80">
                {project.hackathonLabel}
              </p>
            )}

            {project.role && (
              <p className="mt-1 text-center text-xs text-muted">Role: {project.role}</p>
            )}

            <p className="mt-3 text-center text-sm text-muted">{project.tagline}</p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="ghost-btn px-5 py-2.5 text-sm"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
              {project.devpostUrl ? (
                <a
                  href={project.devpostUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="solid-btn px-5 py-2.5 text-sm"
                >
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  Devpost
                </a>
              ) : (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="solid-btn px-5 py-2.5 text-sm"
                >
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        className="mt-10 flex justify-center"
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
