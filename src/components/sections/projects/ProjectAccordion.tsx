import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Added ExternalLink to the import
import { ChevronDown, Github, ExternalLink } from 'lucide-react';

// This is a helper component to render the markdown content
const MarkdownContent = ({ htmlContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export function ProjectAccordion({ project, renderedContent }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project-item group w-full flex-col p-4 not-last:border-b">
      <motion.header
        initial={false}
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer list-none flex-col gap-y-3 text-left"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold underline-offset-6 group-hover:underline">
            {project.data.name}
          </h3>
          <div className="flex items-center">
            <span className="text-xs font-medium text-primary mr-2">
              {isOpen ? "Show less" : "Show more"}
            </span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="size-4" />
            </motion.div>
          </div>
        </div>

        {/* Technologies are now always visible */}
        <div className="flex flex-wrap gap-1.5">
          {project.data.technologies.map((tech) => (
            <span key={tech} className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-secondary">
              {tech}
            </span>
          ))}
        </div>
      </motion.header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {/* Added prose-li:leading-8 here for consistent line spacing */}
            <div className="prose prose-li:leading-8 min-w-full pt-4">
              <MarkdownContent htmlContent={renderedContent} />
            </div>

            <div className="mt-4 flex gap-4">
              {project.data.sourceCode && (
                <a
                  href={project.data.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Original classes with hover:underline
                  className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  <Github className="size-4" />
                  Source Code
                  {/* Added ExternalLink icon */}
                  <ExternalLink className="size-3.5 opacity-70" /> {/* Added slight opacity */}
                </a>
              )}
              {project.data.preview && (
                <a
                  href={project.data.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Original classes with hover:underline
                  className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  <ExternalLink className="size-4" /> {/* Kept original icon for demo */}
                  Live Demo
                  {/* Added ExternalLink icon */}
                  <ExternalLink className="size-3.5 opacity-70" /> {/* Added slight opacity */}
                </a>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}