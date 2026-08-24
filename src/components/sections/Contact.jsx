import { motion } from "framer-motion";
import { Mail, Code2, Briefcase, Globe, FileText, ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";
import { SectionHeading } from "./Projects";
import { profile } from "../../data/profile";

const socialLinks = [
  { key: "github", label: "GitHub", icon: Code2, href: profile.socials.github },
  { key: "linkedin", label: "LinkedIn", icon: Briefcase, href: profile.socials.linkedin },
  { key: "upwork", label: "Upwork", icon: Globe, href: profile.socials.upwork },
].filter((s) => s.href);

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-5 lg:px-8 py-28 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading eyebrow="Get in touch" title="Let's build something." />
        <p className="text-bone-400 mt-5 mb-10 max-w-lg mx-auto leading-relaxed">
          Have a project in mind, or just want to talk shop about React and
          state management? My inbox is open.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Button as="a" href={`mailto:${profile.email}`} variant="accent" size="lg" icon={Mail}>
            {profile.email}
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

        {socialLinks.length > 0 && (
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-bone-400 hover:text-bone-50 transition-colors"
              >
                <s.icon size={16} />
                {s.label}
                <ArrowUpRight size={12} />
              </a>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
