import { Home, FolderGit2, Briefcase, MessageSquareQuote } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/projects", label: "Projects", icon: FolderGit2 },
    { href: "/#experience", label: "Experience", icon: Briefcase },
    { href: "/#testimonials", label: "Testimonials", icon: MessageSquareQuote },
];

export const SideNav = () => {
    const location = useLocation();

    return (
        <nav className="fixed left-0 top-20 bottom-0 z-40 hidden md:flex flex-col w-64 bg-background/50 backdrop-blur-sm border-r border-border p-4">
            <div className="flex flex-col gap-2 mt-8">
                {navLinks.map((link, index) => {
                    const isActive = location.pathname === link.href || (link.href !== "/" && location.hash === link.href.split("/")[1]);
                    const Icon = link.icon;

                    return (
                        <Link
                            key={index}
                            to={link.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                ${isActive
                                    ? "bg-primary/10 text-primary font-medium"
                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                }
              `}
                        >
                            <Icon size={20} className={`transition-transform duration-200 ${isActive ? "scale-110" : "group-hover:scale-110"}`} />
                            <span>{link.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};
