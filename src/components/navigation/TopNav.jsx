import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const TopNav = () => {
    const [isDark, setIsDark] = useState(false);

    // Toggle Dark Mode
    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        if (newTheme) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    // Check system preference on mount
    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
            {/* Logo */}
            <Link
                to="/"
                className="text-2xl font-bold tracking-tight hover:text-primary transition-colors font-serif"
            >
                Sano<span className="text-primary">.</span>
            </Link>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                {/* Contact Button */}
                <Button
                    size="sm"
                    className="rounded-full px-6 bg-transparent border border-gray-600 text-foreground hover:bg-gray-800 hover:text-white transition-all"
                >
                    Contact Me
                </Button>

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-muted transition-colors text-foreground"
                    aria-label="Toggle Theme"
                >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
        </header>
    );
};
