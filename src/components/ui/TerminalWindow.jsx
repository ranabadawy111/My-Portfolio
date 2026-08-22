// The signature visual motif for the site: a small macOS-style
// terminal/browser window chrome, used to frame project previews
// and the hero's code block — a deliberate nod to the developer
// identity, instead of a generic rounded card.
export default function TerminalWindow({ title, children, className = "" }) {
  return (
    <div
      className={`rounded-xl overflow-hidden border border-white/[0.06] bg-graphite-800 shadow-card ${className}`}
    >
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06] bg-graphite-800/80">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        {title && (
          <span className="ml-3 text-xs font-mono text-bone-400 truncate">{title}</span>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}
