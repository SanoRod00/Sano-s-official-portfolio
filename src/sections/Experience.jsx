import { CircleCheckBig } from "lucide-react";

const frontendSkills = [
  { name: "HTML", level: "Experienced" },
  { name: "CSS", level: "Experienced" },
  { name: "Sass", level: "Intermediate" },
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
];

const backendSkills = [
  { name: "Node.js", level: "Intermediate" },
  { name: "Express", level: "Intermediate" },
  { name: "PostgreSQL", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "REST APIs", level: "Advanced" },
  { name: "Git", level: "Advanced" },
];

const SkillCard = ({ title, skills, delay }) => {
  return (
    <article className="reveal soft-card p-7 md:p-8" style={{ animationDelay: delay }}>
      <h3 className="mb-7 text-center text-4xl font-bold text-muted md:text-[2.25rem]">{title}</h3>
      <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-start gap-3">
            <CircleCheckBig className="mt-1 h-5 w-5 shrink-0 text-foreground" />
            <div>
              <p className="text-2xl font-semibold leading-tight">{skill.name}</p>
              <p className="text-lg text-muted">{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="section-shell section-spacing">
      <header className="mb-14 text-center reveal">
        <p className="section-label">Explore My</p>
        <h2 className="section-title">Experience</h2>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <SkillCard title="Frontend Development" skills={frontendSkills} delay="90ms" />
        <SkillCard title="Backend Development" skills={backendSkills} delay="170ms" />
      </div>
    </section>
  );
};
