import { motion } from "framer-motion";
import { Clock3, Linkedin, Mail, MessageCircle } from "lucide-react";

const contacts = [
  {
    label: "sanorod00@gmail.com",
    href: "mailto:sanorod00@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rodrigue-sano-ab3849331",
    icon: Linkedin,
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

export const Contact = () => {
  return (
    <section id="contact" className="section-shell section-spacing">
      <div className="mx-auto max-w-4xl text-center">
        <motion.header
          className="mb-9"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Contact Me</h2>
          <p className="mt-4 text-base text-muted md:text-lg">
            Let&apos;s build something great. I reply fast.
          </p>
        </motion.header>

        <motion.div
          className="frost-card p-4 shadow-sm md:p-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-3 rounded-full border border-border bg-surface px-4 py-2 text-base font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary md:text-lg"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <item.icon className="h-4 w-4" />
                </span>
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-5 grid gap-4 md:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.article className="soft-card hover-lift p-5 text-left" variants={fadeUp}>
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-primary">
              <Clock3 className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold">Fast Response</h3>
            <p className="mt-2 text-sm text-muted md:text-base">Typically within 24 hours.</p>
          </motion.article>

          <motion.article className="soft-card hover-lift p-5 text-left" variants={fadeUp}>
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-accent">
              <MessageCircle className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold">Clear Communication</h3>
            <p className="mt-2 text-sm text-muted md:text-base">Transparent updates & quality-focused delivery.</p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};
