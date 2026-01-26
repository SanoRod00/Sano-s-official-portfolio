import { projects } from "@/data/projects";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const ProjectsPage = () => {
    return (
        <>
            <SEO title="Projects" description="Explore my latest work and case studies." />
            <section className="min-h-screen pt-32 pb-20 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Projects & Case Studies
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            A collection of my work, featuring technical challenges and detailed solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Link
                                key={project.id}
                                to={`/projects/${project.slug}`}
                                className="group relative block glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="aspect-video w-full overflow-hidden">
                                    <img
                                        src={project.heroImage}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h2>
                                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.categories.slice(0, 3).map((cat) => (
                                            <span
                                                key={cat}
                                                className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                                            >
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
