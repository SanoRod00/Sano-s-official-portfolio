export const StatusIndicator = () => {
    return (
        <div className="flex items-center gap-2">
             <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
             <span className="text-xs text-green-500/50 uppercase tracking-widest">Online</span>
        </div>
    )
}
