import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

const RING_SIZE    = 88;
const STROKE_WIDTH = 8;
const RADIUS       = (RING_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const SYNE    = "var(--font-syne, 'Syne', sans-serif)";
const DM_SANS = "var(--font-dm-sans, 'DM Sans', sans-serif)";

const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const ringStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const RadialRing = ({ value, name }) => {
  const offset = CIRCUMFERENCE - (value / 100) * CIRCUMFERENCE;

  return (
    <motion.div className="flex flex-col items-center gap-2" variants={fadeUp}>
      <div className="relative" style={{ width: RING_SIZE, height: RING_SIZE }}>
        <svg className="skill-ring" width={RING_SIZE} height={RING_SIZE} aria-hidden="true">
          <circle
            cx={RING_SIZE / 2}
            cy={RING_SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="var(--color-surface-muted)"
            strokeWidth={STROKE_WIDTH}
          />
          <motion.circle
            cx={RING_SIZE / 2}
            cy={RING_SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="url(#skill-ring-gradient)"
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
            className="skill-ring-progress"
          />
        </svg>

        <span
          className="absolute inset-0 flex items-center justify-center text-sm font-bold text-foreground"
          style={{ fontFamily: DM_SANS }}
        >
          {value}%
        </span>
      </div>

      <p
        className="w-[80px] text-center text-xs leading-tight text-muted"
        style={{ fontFamily: DM_SANS }}
      >
        {name}
      </p>
    </motion.div>
  );
};

const SkillCard = ({ category }) => {
  const isWide = category.wide;
  const innerCols = isWide ? "grid-cols-3" : "grid-cols-2";

  return (
    <motion.div
      className="soft-card p-6 shadow-sm md:p-8"
      variants={fadeUp}
    >
      <h3
        className="mb-7 text-center text-lg font-bold text-foreground md:text-xl"
        style={{ fontFamily: SYNE }}
      >
        {category.title}
      </h3>

      <motion.div
        className={`grid ${innerCols} place-items-center gap-x-4 gap-y-6`}
        variants={ringStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {category.skills.map((skill) => (
          <RadialRing key={skill.name} value={skill.value} name={skill.name} />
        ))}
      </motion.div>
    </motion.div>
  );
};

const wideCards   = skillCategories.filter((c) => c.wide);
const normalCards = skillCategories.filter((c) => !c.wide);

export const Skills = () => {
  return (
    <section id="skills" className="section-shell section-spacing">
      {/* Single shared gradient for all rings */}
      <svg aria-hidden="true" width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="skill-ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="var(--color-ring-start)" />
            <stop offset="100%" stopColor="var(--color-ring-end)"   />
          </linearGradient>
        </defs>
      </svg>

      <motion.header
        className="mb-14 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
      >
        <p className="section-label">What I Work With</p>
        <h2 className="section-title" style={{ fontFamily: SYNE }}>
          Skills
        </h2>
      </motion.header>

      {/* Row 1 — Technical cards: Coding Languages + Frameworks (full width, side by side) */}
      <motion.div
        className="grid gap-6 grid-cols-1 sm:grid-cols-2"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {wideCards.map((category) => (
          <SkillCard key={category.title} category={category} />
        ))}
      </motion.div>

      {/* Row 2 — Skill cards: 2×2 grid (Product, AI, Technical, Hardware) */}
      <motion.div
        className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {normalCards.map((category) => (
          <SkillCard key={category.title} category={category} />
        ))}
      </motion.div>
    </section>
  );
};
