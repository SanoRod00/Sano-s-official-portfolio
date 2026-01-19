import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

interface TerminalInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading?: boolean;
}

export const TerminalInput = ({ value, onChange, onSubmit, isLoading }: TerminalInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when component mounts or user clicks anywhere in terminal
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={onSubmit} className="flex items-center gap-2 w-full">
      <div className="text-green-500 animate-pulse">
        <ArrowRight size={16} strokeWidth={3} />
      </div>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent border-none outline-none text-green-400 font-mono text-sm placeholder:text-green-400/30"
        placeholder="Type a command..."
        disabled={isLoading}
        autoComplete="off"
        spellCheck="false"
      />
    </form>
  );
};
