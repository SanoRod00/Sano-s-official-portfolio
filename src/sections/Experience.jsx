import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";

const LEVEL_WIDTH = { Advanced: 85, Intermediate: 60, Beginner: 35 };

const card1Skills = [
  { name: "Product Strategy",      level: "Advanced" },
  { name: "User Story Writing",    level: "Advanced" },
  { name: "AI Prompt Engineering", level: "Advanced" },
  { name: "Figma / Prototyping",   level: "Intermediate" },
  { name: "Agile / Scrum",         level: "Intermediate" },
  { name: "REST APIs",             level: "Intermediate" },
];

const card2Skills = [
  { name: "Arduino / Raspberry Pi",   level: "Advanced" },
  { name: "Circuit Design (EasyEDA)", level: "Advanced" },
  { name: "Node.js / Express",        level: "Intermediate" },
  { name: "Linux / AWS Deployment",   level: "Intermediate" },
  { name: "PLC / Ladder Logic",       level: "Intermediate" },
  { name: "WebSocket / Realtime",     level: "Intermediate" },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const SkillRow = ({ skill, index }) => {
  const width = LEVEL_WIDTH[skill.level] ?? 50;

  return (
    <div>
      <div className="mb-2.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <CircleCheck
            className="h-5 w-5 shrink-0 text-primary"
            aria-hidden="true"
          />
          <span className="text-base font-medium text-foreground">{skill.name}</span>
        </div>
        <span className="shrink-0 text-sm text-muted">{skill.level}</span>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-muted">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(to right, var(--color-ring-start), var(--color-ring-end))",
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${width}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 + index * 0.08 }}
        />
      </div>
    </div>
  );
};

const SkillCard = ({ title, skills }) => (
  <motion.article className="soft-card p-8 shadow-lg md:p-10" variants={fadeUp}>
    <h3 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
      {title}
    </h3>

    <div className="space-y-5">
      {skills.map((skill, i) => (
        <SkillRow key={skill.name} skill={skill} index={i} />
      ))}
    </div>
  </motion.article>
);

export const Experience = () => {
  return (
    <section id="experience" className="section-shell section-spacing">
      <motion.header
        className="mb-14 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
      >
        <p className="section-label">What I've Built With</p>
        <h2 className="section-title">Experience</h2>
      </motion.header>

      <motion.div
        className="grid gap-6 lg:grid-cols-2"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SkillCard title="Product & AI Engineering"       skills={card1Skills} />
        <SkillCard title="Hardware & Backend Engineering" skills={card2Skills} />
      </motion.div>
    </section>
  );
};
