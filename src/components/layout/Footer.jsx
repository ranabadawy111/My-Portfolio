import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="max-w-6xl mx-auto px-5 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-bone-500 font-mono">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
        </p>
        <p className="text-xs text-bone-500 font-mono">{profile.location}</p>
      </div>
    </footer>
  );
}
