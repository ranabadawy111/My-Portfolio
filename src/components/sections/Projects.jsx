import { motion } from "framer-motion";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";
import TerminalWindow from "../ui/TerminalWindow";
import Tag from "../ui/Tag";
import { projects } from "../../data/profile";

const accentMap = {
  periwinkle: "text-periwinkle-400",
  gold: "text-gold-400",
};

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-5 lg:px-8 py-24">
      <SectionHeading eyebrow="Selected work" title="Things I've built" />

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <TerminalWindow title={`${p.id}.jsx`} className="h-full flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-display text-xl">{p.name}</h3>
                  <span className={`font-mono text-[11px] ${accentMap[p.accent]}`}>
                    0{i + 1}
                  </span>
                </div>
                <p className={`text-sm font-mono mb-4 ${accentMap[p.accent]}`}>{p.tagline}</p>
                <p className="text-bone-400 text-sm leading-relaxed mb-5 flex-1">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
                  {p.liveUrl ? (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-bone-50 hover:text-periwinkle-400 transition-colors"
                    >
                      Live demo <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm text-bone-500">
                      Deploying soon <ArrowUpRight size={13} />
                    </span>
                  )}
                  {p.codeUrl && (
                    <a
                      href={p.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-bone-400 hover:text-bone-50 transition-colors"
                    >
                      Code <Code2 size={13} />
                    </a>
                  )}
                </div>
              </div>
            </TerminalWindow>
          </motion.div>
        ))}

        {/* Placeholder card hinting more projects are coming */}
        {/* <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: projects.length * 0.08 }}
          className="rounded-xl border border-dashed border-white/10 flex items-center justify-center min-h-[220px] p-6"
        >
          <p className="text-bone-500 text-sm text-center font-mono">
            More projects land here
            <br />
            as they ship —
            <br />
            <span className="text-bone-400">just add to `projects.js`</span>
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-periwinkle-400 mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl lg:text-4xl">{title}</h2>
    </div>
  );
}
