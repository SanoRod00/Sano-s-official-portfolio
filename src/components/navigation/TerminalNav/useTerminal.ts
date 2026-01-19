import { useState, useCallback, useEffect } from "react";
import { Command, CommandDefinition } from "./types";

export const useTerminal = () => {
    const [isOpen, setIsOpen] = useState(false); // Initially false, can command to open/close or toggle
    const [history, setHistory] = useState<Command[]>([]);
    const [input, setInput] = useState("");

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const commands: Record<string, CommandDefinition> = {
        help: {
            name: "help",
            description: "List available commands",
            action: () => (
                <div className= "grid grid-cols-[100px_1fr] gap-2 text-sm text-green-400" >
                {
                    Object.values(commands).map((cmd) => (
                        <div key= { cmd.name } className = "contents" >
                        <span className="font-bold" > { cmd.name } </span>
                    < span className = "text-green-400/70" > { cmd.description } </span>
                    </div>
                    ))
                }
                </div>
      ),
    },
about: {
    name: "about",
        description: "Navigate to About section",
            action: () => {
                scrollToSection("about");
                return "Navigating to About section...";
            },
    },
projects: {
    name: "projects",
        description: "View Projects",
            action: () => {
                scrollToSection("projects");
                return "Navigating to Projects section...";
            },
    },
experience: {
    name: "experience",
        description: "Check professional experience",
            action: () => {
                scrollToSection("experience");
                return "Navigating to Experience section...";
            },
    },
contact: {
    name: "contact",
        description: "Get in touch",
            action: () => {
                scrollToSection("contact");
                return "Opening communication channels...";
            },
    },
clear: {
    name: "clear",
        description: "Clear terminal history",
            action: () => {
                setHistory([]);
            },
    },
  };

const executeCommand = useCallback((cmdInput: string) => {
    const trimmedInput = cmdInput.trim().toLowerCase();

    if (!trimmedInput) return;

    const command = commands[trimmedInput];
    let output: React.ReactNode = "";

    if (command) {
        const result = command.action();
        if (result) output = result;
        // If action returns nothing (like clear), we handle it accordingly
    } else {
        output = (
            <span className= "text-red-400" >
            Command not found: { trimmedInput }. Type 'help' for available commands.
        </span>
      );
    }

    // Don't add to history if it's 'clear' and successful (which clears history anyway)
    if (trimmedInput !== "clear") {
        const newCommand: Command = {
            id: Date.now().toString(),
            input: cmdInput,
            output,
            timestamp: Date.now(),
        };
        setHistory((prev) => [...prev, newCommand]);
    }

}, [commands]);

return {
    isOpen,
    setIsOpen,
    history,
    input,
    setInput,
    executeCommand,
};
};
