import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github } from 'lucide-react';
import { Marked } from 'marked';

const SubAccordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  // The content now includes the colon and first line, so we parse it here.
  const htmlContent = new Marked().parse(content);

  return (
    <div className="not-last:border-b">
        <motion.header
            initial={false}
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer items-center justify-between py-3"
        >
            <h4 className="font-semibold text-primary">{title}</h4>
            <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
            >
                <ChevronDown className="size-4" />
            </motion.div>
        </motion.header>
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                >
                    <div className="prose pb-4 text-sm" dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
};


export function NestedProjectAccordion({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  // This is the updated, more robust parser for the sub-projects
  const subProjects = project.body.split('---').map(part => {
    const lines = part.trim().split('\n');
    const titleLine = lines[0] || '';
    const titleMatch = titleLine.match(/-\s\*\*(.*?):\*\*/);
    const title = titleMatch ? titleMatch[1] : 'Unnamed';
    
    // This now correctly includes the rest of the first line
    const firstLineContent = titleLine.replace(/-\s\*\*(.*?):\*\*/, '').trim();
    const restOfContent = lines.slice(1).join('\n').trim();
    
    const content = firstLineContent ? `${firstLineContent}\n${restOfContent}` : restOfContent;

    return { title, content };
  }).filter(p => p.title && p.content.trim());


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
            <div className="pt-4">
              {subProjects.map(sub => <SubAccordion key={sub.title} title={sub.title} content={sub.content} />)}
            </div>

            <div className="mt-4 flex gap-4">
              {project.data.sourceCode && (
                <a href={project.data.sourceCode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  <Github className="size-4" />
                  Source Code
                </a>
              )}
            </div>

          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}