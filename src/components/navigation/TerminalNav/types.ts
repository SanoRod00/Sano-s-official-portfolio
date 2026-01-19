export interface TerminalState {
    isOpen: boolean;
    history: Command[];
    currentInput: string;
}

export interface Command {
    id: string;
    input: string;
    output: React.ReactNode;
    timestamp: number;
}

export interface CommandDefinition {
    name: string;
    description: string;
    action: () => React.ReactNode | void;
}
