export default function Tag({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono text-bone-400 bg-white/[0.04] border border-white/[0.06] ${className}`}
    >
      {children}
    </span>
  );
}
