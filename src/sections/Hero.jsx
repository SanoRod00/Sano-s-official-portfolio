import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Github, Linkedin, Sparkles } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/sanorod",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://github.com/sanorod",
    label: "GitHub",
    icon: Github,
  },
];

const capabilities = [
  {
    title: "UI Engineering",
    text: "Design systems & responsive interfaces.",
  },
  {
    title: "Backend APIs",
    text: "REST services, auth & data models.",
  },
  {
    title: "Cloud Delivery",
    text: "CI/CD, performance & monitoring.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export const Hero = () => {
  return (
    <section className="section-shell section-spacing pt-16 md:pt-24 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="hero-orb hero-orb--primary" />
      <div className="hero-orb hero-orb--accent" />

      <motion.div
        className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-7">
          <motion.div variants={fadeUp}>
            <span className="chip">
              <Sparkles className="h-4 w-4 text-accent" />
              Open to opportunities
            </span>
          </motion.div>

          <motion.div className="space-y-5" variants={fadeUp}>
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted md:text-lg">Hello, I&apos;m</p>
            <h1 className="hero-gradient-title text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
              Sano Rodrigue
            </h1>
            <p className="text-2xl font-semibold text-muted md:text-4xl">Fullstack Engineer crafting end-to-end products.</p>
          </motion.div>

          <motion.p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg" variants={fadeUp}>
            From pixel-perfect UIs to scalable APIs — I ship complete, production-ready web products.
          </motion.p>

          <motion.div className="flex flex-wrap items-center gap-3" variants={fadeUp}>
            <a href="#projects" className="solid-btn">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#contact" className="ghost-btn">
              Contact Me
            </a>
            <a href="/resume.pdf" download className="ghost-btn">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </motion.div>

          <motion.div className="flex items-center gap-3" variants={fadeUp}>
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
              >
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div variants={fadeUp}>
          <div className="relative mx-auto max-w-[430px]">
            <div className="photo-shell">
              <img
                src="/hero-profile.jpg"
                alt="Sano Rodrigue"
                width="940"
                height="940"
                className="photo-image aspect-square rounded-[1.3rem]"
                fetchPriority="high"
              />
            </div>

            <div className="photo-badge -left-4 top-7 md:-left-7">UI + API</div>
            <div className="photo-badge -right-4 bottom-14 md:-right-7">Cloud Ready</div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-10 grid gap-4 md:grid-cols-3 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {capabilities.map((item) => (
          <motion.article
            key={item.title}
            className="soft-card hover-lift p-5"
            variants={fadeUp}
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        className="mt-9 flex justify-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <a
          href="#about"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-muted transition-colors hover:text-foreground"
        >
          Scroll to explore
          <ArrowDown className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  );
};
