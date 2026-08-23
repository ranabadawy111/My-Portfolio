import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { SectionHeading } from "./Projects";
import TerminalWindow from "../ui/TerminalWindow";
import Tag from "../ui/Tag";
import { education, training, languages } from "../../data/profile";

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-5 lg:px-8 py-24">
      <SectionHeading eyebrow="Background" title="Education & training" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12"
      >
        <TerminalWindow title="credentials.log">
          <div className="p-6 space-y-8">
            <div>
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-bone-500 mb-4">
                <GraduationCap size={13} className="text-periwinkle-400" />
                Education
              </p>
              <div className="space-y-4">
                {education.map((e) => (
                  <div key={e.degree}>
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-base">{e.degree}</h3>
                      <span className="font-mono text-[11px] text-bone-500 whitespace-nowrap">
                        {e.period}
                      </span>
                    </div>
                    <p className="text-sm text-periwinkle-400 mt-0.5">
                      {e.institution}
                    </p>
                    {e.note && (
                      <p className="text-sm text-bone-400 mt-0.5">{e.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-bone-500 mb-4">
                <BookOpen size={13} className="text-gold-400" />
                Training
              </p>
              <div className="space-y-4">
                {training.map((t) => (
                  <div key={t.name}>
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-base">{t.name}</h3>
                      <span className="font-mono text-[11px] text-bone-500 whitespace-nowrap">
                        {t.period}
                      </span>
                    </div>
                    <p className="text-sm text-gold-400 mt-0.5">
                      {t.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {languages?.length > 0 && (
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-bone-500 mb-3">
                  Languages
                </p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((l) => (
                    <Tag key={l.name}>
                      {l.name} · {l.level}
                    </Tag>
                  ))}
                </div>
              </div>
            )}
          </div>
        </TerminalWindow>
      </motion.div>
    </section>
  );
}
