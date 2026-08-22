import { motion } from "framer-motion";
import { SectionHeading } from "./Projects";
import Tag from "../ui/Tag";
import TerminalWindow from "../ui/TerminalWindow";
import { skills, experience } from "../../data/profile";

export default function About() {
  return (
    <section id="about" className="bg-graphite-800/40 border-y border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-24">
        <SectionHeading eyebrow="About" title="How I work" />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-8">
              {skills.map((group) => (
                <div key={group.group}>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-bone-500 mb-3">
                    {group.group}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TerminalWindow title="experience.log">
              <div className="p-6 space-y-6">
                {experience.map((job) => (
                  <div key={job.role + job.company}>
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="font-display text-base">{job.role}</h3>
                      <span className="font-mono text-[11px] text-bone-500">{job.period}</span>
                    </div>
                    <p className="text-sm text-periwinkle-400 mb-3">{job.company}</p>
                    <ul className="space-y-1.5">
                      {job.points.map((pt) => (
                        <li
                          key={pt}
                          className="text-sm text-bone-400 leading-relaxed pl-4 relative before:content-['>'] before:absolute before:left-0 before:text-bone-600 before:font-mono"
                        >
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TerminalWindow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
