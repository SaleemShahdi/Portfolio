import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github } from 'lucide-react';
import { Marked } from 'marked';

const SubAccordion = ({ title, description, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const htmlContent = new Marked().parse(content);

  return (
    <li className="list-none not-last:border-b">
      <motion.header
        initial={false}
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center justify-between py-3"
      >
        <div className="text-sm font-medium">
          <strong className="font-semibold">{title}:</strong> {description}
        </div>
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
            <div 
              className="pl-4 pb-4 text-sm leading-7 [&_ul]:list-disc [&_ul]:pl-5"
              dangerouslySetInnerHTML={{ __html: htmlContent }} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export function NestedProjectAccordion({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  const parts = project.body.split('---').map(part => part.trim()).filter(Boolean);
  const intro = parts[0] ? new Marked().parse(parts[0]) : '';
  const outro = parts[parts.length - 1] && !parts[parts.length - 1].startsWith('- **') ? new Marked().parse(parts[parts.length - 1]) : '';

  const subProjects = parts.filter(part => part.startsWith('- **')).map(part => {
    const lines = part.trim().split('\n');
    const titleLine = lines[0] || '';
    
    const titleMatch = titleLine.match(/-\s\*\*(.*?):\*\*/);
    const title = titleMatch ? titleMatch[1] : 'Unnamed';
    
    const description = titleLine.replace(/-\s\*\*(.*?):\*\*/, '').trim();
    const content = lines.slice(1).join('\n').trim();

    return { title, description, content };
  });

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
            <div className="prose min-w-full pt-4 text-sm">
              <ul>
                <li dangerouslySetInnerHTML={{ __html: intro }} />
                  {subProjects.map(sub => (
                    <li className="list-none p-0 my-2">
                      <SubAccordion key={sub.title} title={sub.title} description={sub.description} content={sub.content} />
                    </li>
                  ))}
                <li dangerouslySetInnerHTML={{ __html: outro }} />
              </ul>
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