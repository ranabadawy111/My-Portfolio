import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, FileText } from "lucide-react";
import Button from "../ui/Button";
import TerminalWindow from "../ui/TerminalWindow";
import TypedCode from "../ui/TypedCode";
import { profile } from "../../data/profile";

const codeLines = [
  "const developer = {",
  `   name: "${profile.name}",`,
  `   role: "${profile.role}",`,
  `   stack: ["React", "Redux Toolkit", "Tailwind"],`,
  `   status: "${profile.availability}",`,
  "};",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-grid pt-24 pb-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-graphite-900 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-periwinkle-400 mb-5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-periwinkle-400 animate-pulse" />
            {profile.availability}
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] mb-6">
            {profile.tagline.split(" ").slice(0, 4).join(" ")}{" "}
            <span className="text-gradient">
              {profile.tagline.split(" ").slice(4).join(" ")}
            </span>
          </h1>

          <p className="text-bone-400 text-base sm:text-lg leading-relaxed mb-9 max-w-md">
            {profile.bio}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button as="a" href="#projects" variant="accent" size="lg" icon={ArrowRight}>
              View my work
            </Button>
            <Button as="a" href="#contact" variant="secondary" size="lg">
              Get in touch
            </Button>
            {profile.resumeUrl && (
              <Button
                as="a"
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                icon={FileText}
              >
                View CV
              </Button>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <TerminalWindow title="about-me.js">
            <div className="p-5">
              <TypedCode lines={codeLines} />
            </div>
          </TerminalWindow>
        </motion.div>
      </div>

      <motion.a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-bone-500 hover:text-bone-200 transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
