import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { FloatingUniverse } from "@/components/FloatingUniverse";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/rodrigue-sano-ab3849331",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://github.com/SanoRod00",
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

const AVATAR_SIZE = "clamp(240px, 28vw, 380px)";

const HeroAvatar = () => (
  <motion.div
    className="flex justify-center items-center"
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
  >
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      style={{ position: "relative", width: AVATAR_SIZE, height: AVATAR_SIZE }}
    >
      {/* Glow aura */}
      <div
        style={{
          position: "absolute",
          inset: "-24px",
          borderRadius: "9999px",
          boxShadow:
            "0 0 60px 20px color-mix(in srgb, var(--color-primary) 28%, transparent), 0 0 100px 40px color-mix(in srgb, var(--color-accent) 14%, transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Spinning conic-gradient ring — first child, sits behind image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "9999px",
          background:
            "conic-gradient(from 0deg, var(--color-primary), var(--color-accent), var(--color-primary))",
          animation: "spin-ring 4s linear infinite",
        }}
      />

      {/* Image container — second child, naturally above ring */}
      <div
        style={{
          position: "absolute",
          inset: "4px",
          borderRadius: "9999px",
          overflow: "hidden",
          background: "var(--color-background)",
        }}
      >
        <img
          src="/hero-avatar.png"
          alt="Sano Rodrigue"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
        />
      </div>

      {/* Status badge */}
      <div
        style={{
          position: "absolute",
          bottom: "-1.75rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          whiteSpace: "nowrap",
        }}
      >
        <span className="status-badge shadow-md">
          <span className="status-dot" />
          Open to opportunities
        </span>
      </div>
    </motion.div>
  </motion.div>
);

export const Hero = () => {
  const [step, setStep] = useState(0);
  const [nameText, setNameText] = useState("");
  const [titleText, setTitleText] = useState("");
  const [showNameCursor, setShowNameCursor] = useState(false);
  const [showTitleCursor, setShowTitleCursor] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const runAnimations = async () => {
      await new Promise((r) => setTimeout(r, 200));
      if (!isMounted) return;
      setStep(1);

      await new Promise((r) => setTimeout(r, 600));
      if (!isMounted) return;
      setStep(2);
      setShowNameCursor(true);

      const fullName = "Sano Rodrigue";
      let currentName = "";
      for (let i = 0; i < fullName.length; i++) {
        currentName += fullName[i];
        if (!isMounted) return;
        setNameText(currentName);
        await new Promise((r) => setTimeout(r, 80));
      }

      await new Promise((r) => setTimeout(r, 1200));
      if (!isMounted) return;
      setShowNameCursor(false);

      setStep(3);
      setShowTitleCursor(true);
      const fullTitle = "Fullstack Engineer crafting end-to-end products.";
      let currentTitle = "";
      for (let i = 0; i < fullTitle.length; i++) {
        currentTitle += fullTitle[i];
        if (!isMounted) return;
        setTitleText(currentTitle);
        await new Promise((r) => setTimeout(r, 45));
      }
      if (!isMounted) return;
      setShowTitleCursor(false);

      setStep(4);
      await new Promise((r) => setTimeout(r, 700));
      if (!isMounted) return;

      setStep(5);
      await new Promise((r) => setTimeout(r, 120 * 3 + 300));
      if (!isMounted) return;

      setStep(6);
    };

    runAnimations();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="w-full section-spacing pt-16 md:pt-24 relative overflow-hidden">
      {/* Gradient orb background */}
      <div className="hero-orb hero-orb--primary" />
      <div className="hero-orb hero-orb--accent" />

      {/* Floating particle universe — z-[2], between bg (z-0) and content (z-10) */}
      <FloatingUniverse />

      <div className="mx-auto w-full max-w-6xl px-5 md:px-8 relative z-10">
        {/* Two-column grid: text left, avatar right */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

          {/* ── Left column: text content ── */}
          <div className="space-y-7">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={step >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="status-badge">
                <span className="status-dot" />
                Open to opportunities
              </span>
            </motion.div>

            <div className="space-y-5">
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={step >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-base font-semibold uppercase tracking-[0.2em] text-muted md:text-lg"
              >
                Hello, I&apos;m
              </motion.p>
              <h1 className="hero-gradient-title text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl min-h-[1.1em]">
                {nameText}
                {showNameCursor && <span className="animate-pulse">▌</span>}
              </h1>
              <p className="text-2xl font-semibold text-muted md:text-4xl min-h-[1.5em]">
                {titleText}
                {showTitleCursor && <span className="animate-pulse">▌</span>}
              </p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={step >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-xl text-base leading-relaxed text-muted md:text-lg"
            >
              From pixel-perfect UIs to scalable APIs — I ship complete, production-ready web products.
            </motion.p>

            <div className="flex flex-wrap items-center gap-3">
              <motion.a
                href="#projects"
                className="solid-btn"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={step >= 5 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: 0 }}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.a>
              <motion.a
                href="#contact"
                className="ghost-btn"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={step >= 5 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: 0.12 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                className="ghost-btn"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={step >= 5 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: 0.24 }}
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </motion.a>
            </div>

            <div className="flex items-center gap-3 h-11">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={step >= 6 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 12,
                    delay: index * 0.08,
                  }}
                >
                  <item.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Right column: avatar ── */}
          <div className="hidden lg:flex justify-center items-center pb-8">
            <HeroAvatar />
          </div>
        </div>

        {/* Capabilities grid */}
        <motion.div
          className="mt-14 grid gap-4 md:grid-cols-3 relative z-10"
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
      </div>
    </section>
  );
};
