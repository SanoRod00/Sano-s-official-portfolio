import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

const RING_SIZE    = 88;
const STROKE_WIDTH = 8;
const RADIUS       = (RING_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const ringStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const RadialRing = ({ value, name }) => {
  const offset = CIRCUMFERENCE - (value / 100) * CIRCUMFERENCE;

  return (
    <motion.div className="flex flex-col items-center gap-2.5" variants={fadeUp}>
      <div className="relative" style={{ width: RING_SIZE, height: RING_SIZE }}>
        <svg
          className="skill-ring"
          width={RING_SIZE}
          height={RING_SIZE}
          aria-hidden="true"
        >
          {/* Track */}
          <circle
            cx={RING_SIZE / 2}
            cy={RING_SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="var(--color-surface-muted)"
            strokeWidth={STROKE_WIDTH}
          />
          {/* Animated progress arc */}
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
          style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)" }}
        >
          {value}%
        </span>
      </div>

      <p
        className="max-w-[80px] text-center text-xs leading-tight text-muted"
        style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)" }}
      >
        {name}
      </p>
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="section-shell section-spacing">
      {/* Shared gradient referenced by all ring SVGs */}
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
        <h2
          className="section-title"
          style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
        >
          Skills
        </h2>
      </motion.header>

      <motion.div
        className="grid gap-6 grid-cols-2 lg:grid-cols-4"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            className="soft-card p-5 shadow-sm md:p-7"
            variants={fadeUp}
          >
            <h3
              className="mb-6 text-center text-base font-bold text-foreground md:text-xl"
              style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
            >
              {category.title}
            </h3>

            <motion.div
              className="grid grid-cols-2 place-items-center gap-x-3 gap-y-6"
              variants={ringStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {category.skills.map((skill) => (
                <RadialRing key={skill.name} value={skill.value} name={skill.name} />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
