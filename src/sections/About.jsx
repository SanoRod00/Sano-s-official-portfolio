import { motion } from "framer-motion";
import { Award, Download, Users } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Experience",
    subtitle: "3+ years",
    detail: "Fullstack Development",
  },
  {
    icon: Users,
    title: "Education",
    subtitle: "B.Sc. Software Engineering",
    detail: "Product-focused engineering",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const About = () => {
  return (
    <section id="about" className="section-shell section-spacing">
      <motion.header
        className="mb-14 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
      >
        <p className="section-label">A Bit About Me</p>
        <h2 className="section-title">About</h2>
      </motion.header>

      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="photo-shell">
            <img
              src="/hero-profile.jpg"
              alt="Portrait of Sano Rodrigue"
              width="1100"
              height="1400"
              loading="lazy"
              decoding="async"
              className="photo-image"
            />
          </div>

          <span className="photo-badge right-4 bottom-4">Open to Remote</span>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <motion.article
                key={item.title}
                className="soft-card hover-lift p-6 text-center shadow-sm"
                variants={fadeUp}
              >
                <item.icon className="mx-auto mb-3 h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold leading-tight md:text-3xl">{item.title}</h3>
                <p className="mt-1 text-lg font-semibold text-muted md:text-xl">{item.subtitle}</p>
                <p className="text-base text-muted md:text-lg">{item.detail}</p>
              </motion.article>
            ))}
          </div>

          <motion.p className="text-lg leading-relaxed text-muted md:text-xl" variants={fadeUp}>
            Fullstack engineer from Kigali, Rwanda. I design intuitive interfaces, build scalable backends, and ship complete products, from idea to deployment.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a href="/resume.pdf" download className="solid-btn">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
