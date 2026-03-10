import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";

const clientSkills = [
  { name: "React", level: "Advanced", value: 92 },
  { name: "TypeScript", level: "Advanced", value: 89 },
  { name: "Next.js", level: "Advanced", value: 88 },
  { name: "Tailwind", level: "Advanced", value: 90 },
  { name: "Accessibility", level: "Advanced", value: 86 },
  { name: "UI Architecture", level: "Advanced", value: 87 },
];

const serverSkills = [
  { name: "Node.js", level: "Advanced", value: 87 },
  { name: "Express", level: "Advanced", value: 85 },
  { name: "PostgreSQL", level: "Intermediate", value: 80 },
  { name: "MongoDB", level: "Intermediate", value: 79 },
  { name: "REST APIs", level: "Advanced", value: 89 },
  { name: "Deployment", level: "Advanced", value: 84 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const SkillBar = ({ skill }) => {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <CircleCheckBig className="h-4.5 w-4.5 text-primary" />
          <p className="text-base font-semibold md:text-lg">{skill.name}</p>
        </div>
        <p className="text-sm font-medium text-muted">{skill.level}</p>
      </div>
      <div className="h-2 w-full rounded-full bg-surface-muted overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
};

const SkillCard = ({ title, skills }) => {
  return (
    <motion.article
      className="soft-card hover-lift p-7 shadow-sm md:p-8"
      variants={fadeUp}
    >
      <h3 className="mb-7 text-center text-3xl font-bold text-foreground md:text-4xl">{title}</h3>
      <div className="space-y-5">
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.article>
  );
};

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
        <p className="section-label">Explore My</p>
        <h2 className="section-title">Experience</h2>
      </motion.header>

      <motion.div
        className="grid gap-6 lg:grid-cols-2"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SkillCard title="Client & Product Engineering" skills={clientSkills} />
        <SkillCard title="Backend & Platform Engineering" skills={serverSkills} />
      </motion.div>
    </section>
  );
};
