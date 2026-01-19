import { ArrowRight } from "lucide-react";
import { Command } from "./types";

interface CommandHistoryProps {
  history: Command[];
}

export const CommandHistory = ({ history }: CommandHistoryProps) => {
  return (
    <div className="flex flex-col gap-2">
      {history.map((cmd) => (
        <div key={cmd.id} className="mb-2">
          <div className="flex items-center gap-2 text-muted-foreground/50 mb-1">
            <ArrowRight size={12} />
            <span className="text-white/80">{cmd.input}</span>
          </div>
          <div className="pl-5 text-muted-foreground">{cmd.output}</div>
        </div>
      ))}
    </div>
  );
};
