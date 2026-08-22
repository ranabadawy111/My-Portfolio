const variants = {
  primary: "bg-bone-50 text-graphite-900 hover:bg-bone-200",
  accent: "bg-periwinkle-500 text-graphite-950 hover:bg-periwinkle-400",
  secondary:
    "bg-transparent text-bone-50 border border-bone-50/15 hover:border-bone-50/35 hover:bg-white/[0.03]",
  ghost: "bg-transparent text-bone-400 hover:text-bone-50",
};

const sizes = {
  sm: "text-xs px-4 py-2",
  md: "text-sm px-5 py-2.5",
  lg: "text-[15px] px-6 py-3",
};

export default function Button({
  children,
  as: Tag = "button",
  variant = "primary",
  size = "md",
  icon: Icon,
  className = "",
  ...props
}) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-periwinkle-400 focus-visible:ring-offset-2 focus-visible:ring-offset-graphite-900 disabled:opacity-40 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon size={15} strokeWidth={2} />}
    </Tag>
  );
}
