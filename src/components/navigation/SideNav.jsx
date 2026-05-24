import { Home, FolderGit2, Briefcase } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/projects", label: "Projects", icon: FolderGit2 },
    { href: "/#experience", label: "Experience", icon: Briefcase },
];

export const SideNav = ({ isOpen, onClose }) => {
    const location = useLocation();

    // Close sidebar when route changes (mobile)
    useEffect(() => {
        if (window.innerWidth < 768) {
            onClose?.();
        }
    }, [location, onClose]);

    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
                    onClick={onClose}
                />
            )}

            <nav
                className={`
          fixed left-0 top-20 bottom-0 z-40 flex flex-col w-64 bg-background/50 backdrop-blur-md border-r border-border p-4
          transition-transform duration-300 ease-in-out md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
            >
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
        </>
    );
};
