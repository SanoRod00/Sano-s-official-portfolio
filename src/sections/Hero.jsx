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

export const Hero = () => {
  const [step, setStep] = useState(0);
  const [nameText, setNameText] = useState("");
  const [titleText, setTitleText] = useState("");
  const [showNameCursor, setShowNameCursor] = useState(false);
  const [showTitleCursor, setShowTitleCursor] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const runAnimations = async () => {
      // Step 1: Delay 0.2s before fading in "HELLO, I'M"
      await new Promise((r) => setTimeout(r, 200));
      if (!isMounted) return;
      setStep(1);

      // Step 2 starts at delay 0.8s from page load (0.6s after step 1 starts)
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

      // Cursor disappears after name is fully typed after 1.2s
      await new Promise((r) => setTimeout(r, 1200));
      if (!isMounted) return;
      setShowNameCursor(false);

      // Step 3: Type out subtitle
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

      // Step 4: Subtitle paragraph fades + slides up
      setStep(4);
      await new Promise((r) => setTimeout(r, 700));
      if (!isMounted) return;

      // Step 5: Buttons appear with staggered bounce
      setStep(5);
      await new Promise((r) => setTimeout(r, 120 * 3 + 300));
      if (!isMounted) return;

      // Step 6: Social icons pop in last
      setStep(6);
    };

    runAnimations();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="w-full section-spacing pt-16 md:pt-24 relative overflow-hidden">
      {/* Background Photo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/hero-profile.jpg"
          alt="Sano Rodrigue Background"
          className="absolute inset-0 w-full h-full object-cover object-[center_top] animate-kenburns"
        />
        
        {/* Light Mode Desktop Overlay */}
        <div 
          className="absolute inset-0 animate-breathe hidden md:block dark:hidden"
          style={{
            background: `linear-gradient(135deg, rgba(235, 240, 255, 0.82) 0%, rgba(219, 228, 255, 0.70) 40%, rgba(255, 235, 210, 0.50) 100%)`,
          }}
        />
        {/* Light Mode Mobile Overlay (0.88 opacity) */}
        <div 
          className="absolute inset-0 animate-breathe md:hidden dark:hidden"
          style={{
            background: `linear-gradient(135deg, rgba(235, 240, 255, 0.88) 0%, rgba(219, 228, 255, 0.88) 40%, rgba(255, 235, 210, 0.88) 100%)`,
          }}
        />
        
        {/* Dark Mode Desktop Overlay */}
        <div 
          className="absolute inset-0 animate-breathe hidden md:dark:block"
          style={{
            background: `rgba(10, 15, 40, 0.78)`
          }}
        />
        {/* Dark Mode Mobile Overlay (0.88 opacity) */}
        <div 
          className="absolute inset-0 animate-breathe hidden dark:block md:dark:hidden"
          style={{
            background: `rgba(10, 15, 40, 0.88)`
          }}
        />
      </div>

      {/* Floating particle universe — z-[2], between bg (z-0) and content (z-10) */}
      <FloatingUniverse />

      <div className="mx-auto w-full max-w-6xl px-5 md:px-8 relative z-10">
        <div className="max-w-2xl space-y-7">
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
            className="max-w-2xl text-base leading-relaxed text-muted md:text-lg"
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
      </div>
    </section>
  );
};
