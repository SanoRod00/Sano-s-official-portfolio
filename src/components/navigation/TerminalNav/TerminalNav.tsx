import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, Minimize2, Maximize2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTerminal } from "./useTerminal";
import { TerminalInput } from "./TerminalInput";
import { CommandHistory } from "./CommandHistory";
import { StatusIndicator } from "./StatusIndicator";

export const TerminalNav = () => {
  const { history, input, setInput, executeCommand, isOpen, setIsOpen } = useTerminal();
  const [isMinimized, setIsMinimized] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of history
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
    setInput("");
  };

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle Button (Visible when closed) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={toggleOpen}
            className="fixed bottom-6 right-6 p-4 bg-black/80 backdrop-blur-md border border-green-500/30 rounded-full text-green-500 hover:text-green-400 hover:border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.3)] z-50 transition-all group"
            aria-label="Open Developer Console"
          >
            <Terminal size={24} className="group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.95 }}
            animate={{ 
              y: 0, 
              opacity: 1, 
              scale: 1,
              height: isMinimized ? "auto" : "50vh" 
            }}
            exit={{ y: 200, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed bottom-0 left-0 right-0 md:left-auto md:right-6 md:bottom-6 md:w-[600px] bg-black/90 backdrop-blur-xl border border-green-500/20 rounded-t-2xl md:rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col font-mono text-sm`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-green-500/80">
                    <Terminal size={14} />
                    <span className="text-xs font-semibold tracking-wider">DEV_CONSOLE_V1</span>
                </div>
                <StatusIndicator />
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white/10 rounded-md text-muted-foreground hover:text-foreground transition-colors"
                >
                  {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
                </button>
                <button 
                  onClick={toggleOpen}
                  className="p-1 hover:bg-red-500/20 rounded-md text-muted-foreground hover:text-red-400 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Content Area */}
            {!isMinimized && (
              <div className="flex-1 p-4 overflow-y-auto custom-scrollbar flex flex-col gap-2">
                {/* Welcome Message */}
                <div className="mb-4 text-green-400/80">
                  <p>{">"} Welcome to Sano's portfolio.</p>
                  <p>{">"} Type <span className="text-green-400 font-bold">'help'</span> to see available commands.</p>
                </div>

                {/* History */}
                <CommandHistory history={history} />

                {/* Input Area */}
                <div className="mt-auto pt-2 border-t border-white/5">
                  <TerminalInput 
                    value={input}
                    onChange={setInput}
                    onSubmit={handleSubmit}
                  />
                </div>
                <div ref={bottomRef} />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
