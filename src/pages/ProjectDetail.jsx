import { useParams, Navigate, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/Button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export const ProjectDetail = () => {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    return (
        <>
            <SEO title={project.title} description={project.description} image={project.heroImage} />
            <article className="min-h-screen pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-5xl">
                    {/* Back Link */}
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </Link>

                    {/* Header */}
                    <header className="mb-16 space-y-6 animate-fade-in">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-light">
                            {project.tagline}
                        </p>

                        <div className="flex gap-4 pt-4">
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary">
                                        View Live <ExternalLink className="w-4 h-4 ml-2" />
                                    </Button>
                                </a>
                            )}
                            {project.repoUrl && (
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className="glass">
                                        Source Code <Github className="w-4 h-4 ml-2" />
                                    </Button>
                                </a>
                            )}
                        </div>
                    </header>

                    {/* Hero Image */}
                    <div className="rounded-2xl overflow-hidden glass shadow-2xl mb-16 animate-fade-in animation-delay-200">
                        <img
                            src={project.heroImage}
                            alt={project.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Sidebar / Meta */}
                        <div className="space-y-8 lg:col-span-1 animate-fade-in animation-delay-300">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
                                    Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.techStack.map((tech) => (
                                        <div
                                            key={tech.name}
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg glass text-sm font-medium"
                                        >
                                            <span>{tech.icon}</span>
                                            <span>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
                                    Key Features
                                </h3>
                                <ul className="space-y-2">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12 animate-fade-in animation-delay-400">
                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-primary">The Problem</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {project.problem}
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-primary">The Solution</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {project.solution}
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-primary">Results & Outcomes</h2>
                                <div className="glass p-6 rounded-xl border-l-4 border-primary">
                                    <p className="text-lg font-medium italic">
                                        "{project.results}"
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};
