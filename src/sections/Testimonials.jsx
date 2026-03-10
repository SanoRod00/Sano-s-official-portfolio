import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "One of the most talented engineers I've worked with. Remarkable attention to detail and elegant solutions.",
    author: "Sarah Chen",
    role: "CTO, Tech Innovators Inc.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote:
      "A game-changer for our project. Delivered ahead of schedule with code quality that set a new team standard.",
    author: "Michael Rodriguez",
    role: "Product Manager, Digital Solutions",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Helped us rebuild our product platform in record time. His architectural decisions still pay dividends.",
    author: "Emily Watson",
    role: "Engineering Lead, StartUp Labs",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Technically brilliant, a fantastic communicator, and a true team player. He elevated everyone around him.",
    author: "David Kim",
    role: "CEO, Innovation Hub",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="section-shell section-spacing relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <motion.header
        className="mb-14 text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
      >
        <p className="section-label">What People Say</p>
        <h2 className="section-title">
          Kind words from{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            amazing people.
          </span>
        </h2>
      </motion.header>

      <motion.div
        className="mx-auto max-w-4xl relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        {/* Main Testimonial Card */}
        <div className="frost-card p-8 md:p-12 relative shadow-sm">
          <div className="absolute -top-4 left-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
            <Quote className="h-6 w-6" />
          </div>

          <motion.blockquote
            key={activeIdx}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="text-xl font-medium leading-relaxed text-foreground md:text-2xl pt-4"
          >
            &ldquo;{testimonials[activeIdx].quote}&rdquo;
          </motion.blockquote>

          <motion.div
            key={`author-${activeIdx}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mt-8 flex items-center gap-4"
          >
            <img
              src={testimonials[activeIdx].avatar}
              alt={testimonials[activeIdx].author}
              className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/20"
            />
            <div>
              <p className="font-semibold text-foreground">
                {testimonials[activeIdx].author}
              </p>
              <p className="text-sm text-muted">
                {testimonials[activeIdx].role}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={previous}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${idx === activeIdx
                  ? "w-8 bg-primary"
                  : "w-2 bg-border hover:bg-muted"
                  }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};
