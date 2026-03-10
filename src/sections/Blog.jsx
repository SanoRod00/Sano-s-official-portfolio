import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

export const Blog = () => {
    return (
        <section id="blog" className="section-shell section-spacing">
            <motion.header
                className="mb-14 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
            >
                <p className="section-label">From The Blog</p>
                <h2 className="section-title">Latest Articles</h2>
                <p className="mt-4 text-base text-muted md:text-lg mx-auto max-w-2xl">
                    Fullstack engineering, design systems & productivity.
                </p>
            </motion.header>

            <motion.div
                className="grid gap-6 md:grid-cols-2"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                {blogPosts.map((post) => (
                    <motion.a
                        key={post.id}
                        href={post.url}
                        target={post.url !== "#" ? "_blank" : undefined}
                        rel={post.url !== "#" ? "noreferrer" : undefined}
                        className="soft-card group block p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-7"
                        variants={fadeUp}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="chip">{post.category}</span>
                            <span className="flex items-center gap-1.5 text-xs font-medium text-muted">
                                <Clock className="h-3.5 w-3.5" />
                                {post.readTime}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold leading-snug text-foreground group-hover:text-primary transition-colors duration-200 md:text-2xl">
                            {post.title}
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                            {post.excerpt}
                        </p>

                        <div className="mt-5 flex items-center justify-between">
                            <span className="flex items-center gap-1.5 text-xs font-medium text-muted">
                                <BookOpen className="h-3.5 w-3.5" />
                                {formatDate(post.date)}
                            </span>
                            <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                Read more
                                <ArrowUpRight className="h-4 w-4" />
                            </span>
                        </div>
                    </motion.a>
                ))}
            </motion.div>
        </section>
    );
};
