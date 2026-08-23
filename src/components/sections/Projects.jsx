import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, ArrowUpRight, ChevronDown } from "lucide-react";
import TerminalWindow from "../ui/TerminalWindow";
import Tag from "../ui/Tag";
import { projects } from "../../data/profile";

const INITIAL_PROJECTS = 4;

const accentMap = {
  periwinkle: "text-periwinkle-400",
  gold: "text-gold-400",
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, INITIAL_PROJECTS);

  const hasMoreProjects = projects.length > INITIAL_PROJECTS;

  return (
    <section id="projects" className="max-w-6xl mx-auto px-5 lg:px-8 py-24">
      <SectionHeading eyebrow="Selected work" title="Things I've built" />

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <AnimatePresence initial={false}>
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{
                duration: 0.45,
                delay: index > INITIAL_PROJECTS - 1 ? 0.08 : index * 0.08,
              }}
            >
              <TerminalWindow
                title={`${project.id}.jsx`}
                className="h-full flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-display text-xl">{project.name}</h3>

                    <span
                      className={`font-mono text-[11px] ${
                        accentMap[project.accent]
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p
                    className={`text-sm font-mono mb-4 ${
                      accentMap[project.accent]
                    }`}
                  >
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-bone-400 text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-bone-50 hover:text-periwinkle-400 transition-colors"
                      >
                        Live demo
                        <ExternalLink size={13} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm text-bone-500">
                        Deploying soon
                        <ArrowUpRight size={13} />
                      </span>
                    )}

                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-bone-400 hover:text-bone-50 transition-colors"
                      >
                        Code
                        <Code2 size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </TerminalWindow>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* View more / Show less */}
      {hasMoreProjects && (
        <div className="flex justify-center mt-10">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="
              group
              inline-flex
              items-center
              gap-2
              px-5
              py-2.5
              rounded-xl
              border
              border-white/10
              bg-white/[0.025]
              text-sm
              text-bone-300
              hover:text-bone-50
              hover:border-periwinkle-400/30
              hover:bg-white/[0.05]
              transition-all
              duration-200
            "
          >
            {showAll ? "Show less" : "View more projects"}

            <ChevronDown
              size={15}
              className={`transition-transform duration-200 ${
                showAll ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      )}
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
