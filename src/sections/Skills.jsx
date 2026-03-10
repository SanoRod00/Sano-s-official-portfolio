import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

const RING_SIZE = 90;
const STROKE_WIDTH = 7;
const RADIUS = (RING_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const RadialRing = ({ value, name }) => {
    const offset = CIRCUMFERENCE - (value / 100) * CIRCUMFERENCE;

    return (
        <motion.div
            className="flex flex-col items-center gap-2"
            variants={fadeUp}
        >
            <div className="relative" style={{ width: RING_SIZE, height: RING_SIZE }}>
                <svg className="skill-ring" width={RING_SIZE} height={RING_SIZE}>
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
                        stroke="url(#ring-gradient)"
                        strokeWidth={STROKE_WIDTH}
                        strokeLinecap="round"
                        strokeDasharray={CIRCUMFERENCE}
                        initial={{ strokeDashoffset: CIRCUMFERENCE }}
                        whileInView={{ strokeDashoffset: offset }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
                        className="skill-ring-progress"
                    />
                    <defs>
                        <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="var(--color-primary)" />
                            <stop offset="100%" stopColor="var(--color-accent)" />
                        </linearGradient>
                    </defs>
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-foreground">
                    {value}%
                </span>
            </div>
            <p className="text-sm font-semibold text-foreground text-center leading-tight">{name}</p>
        </motion.div>
    );
};

export const Skills = () => {
    return (
        <section id="skills" className="section-shell section-spacing">
            <motion.header
                className="mb-14 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
            >
                <p className="section-label">What I Work With</p>
                <h2 className="section-title">Skills</h2>
            </motion.header>

            <motion.div
                className="grid gap-6 md:grid-cols-3"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                {skillCategories.map((category) => (
                    <motion.div
                        key={category.title}
                        className="soft-card hover-lift p-7 shadow-sm"
                        variants={fadeUp}
                    >
                        <h3 className="mb-6 text-center text-2xl font-bold text-foreground md:text-3xl">
                            {category.title}
                        </h3>
                        <div className="grid grid-cols-3 gap-y-6 gap-x-3 sm:grid-cols-3 place-items-center">
                            {category.skills.map((skill) => (
                                <RadialRing key={skill.name} value={skill.value} name={skill.name} />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
