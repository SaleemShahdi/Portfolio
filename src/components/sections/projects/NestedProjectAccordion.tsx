import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, ExternalLink } from 'lucide-react';
import { Marked } from 'marked';

const SubAccordion = ({ title, description, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const htmlContent = new Marked().parse(content);
  const toggleOpen = () => setIsOpen(!isOpen);

  // --- SUB-ACCORDION SETTINGS ---
  // Speed: 0.4s
  const activeDuration = 0.4;
  const activeEase = "easeInOut";
  const opacityDuration = 0.4;

  return (
    <li className="py-2 not-last:border-b">
      <motion.header
        initial={false}
        onClick={toggleOpen}
        // 'group' tracks hover state for this row
        className="flex cursor-pointer items-center justify-between group"
      >
        <div className="prose">
          <p className="m-0">
            <strong className="font-semibold">{title}:</strong> {description}
          </p>
        </div>
        
        {/* ARROW CONTAINER */}
        <div className="flex flex-col items-center justify-center">
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <ChevronDown className="size-4" />
          </motion.div>

          {/* THE FAKE UNDERLINE */}
          <div className="h-px w-full bg-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        </div>
      </motion.header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                height: 'auto',
                transition: {
                  height: { duration: activeDuration, ease: activeEase },
                  opacity: { duration: opacityDuration }
                }
              },
              collapsed: {
                opacity: 0,
                height: 0,
                transition: {
                  height: { duration: activeDuration, ease: activeEase },
                  opacity: { duration: opacityDuration }
                }
              }
            }}
            style={{ transform: "translateZ(0)" }}
            className="overflow-hidden"
          >
            <div
              className="prose min-w-full prose-li:leading-8"
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
  const toggleOpen = () => setIsOpen(!isOpen);

  const parts = project.body.split('---').map(part => part.trim()).filter(Boolean);
  const intro = parts[0] ? new Marked().parse(parts[0]) : '';
  const outro = parts[parts.length - 1] && !parts[parts.length - 1].startsWith('- **') ? new Marked().parse(parts[parts.length - 1]) : '';

  const subProjects = parts.filter(part => part.startsWith('- **')).map(part => {
    const lines = part.trim().split('\n');
    const titleLine = lines[0] || '';
    const titleMatch = titleLine.match(/-\s\*\*(.*?):\*\*/);
    const title = titleMatch ? titleMatch[1] : 'Unnamed';
    const description = titleLine.replace(/-\s\*\*(.*?):\*\*/, '').trim();
    const content = lines.slice(1).map(line => line.trim()).join('\n');
    return { title, description, content };
  });

  // --- PARENT ACCORDION SETTINGS ---
  // Speed: 0.5s (Smooth)
  const activeDuration = 0.5;
  const activeEase = "easeInOut";
  const opacityDuration = 0.5;

  return (
    <div className="project-item flex w-full flex-col p-4 not-last:border-b">
       <motion.header
        initial={false}
        onClick={toggleOpen}
        // 'group' tracks hover state for the parent header
        className="flex cursor-pointer list-none flex-col gap-y-3 text-left group"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {project.data.name}
          </h3>
          
          <div className="flex items-center">
            <span className="mr-2 text-xs font-medium text-primary underline-offset-4 group-hover:underline">
              {isOpen ? "Show less" : "Show more"}
            </span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <ChevronDown className="size-4" />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.data.technologies.map((tech) => (
            <span 
              key={tech} 
              // UPDATED: bg-[#8BECF9], text-[#163E64], ring-[#8BECF9]
              className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium bg-[#C1E5F5] text-[#000000] ring-1 ring-inset ring-[#C1E5F5] dark:bg-secondary dark:text-secondary-foreground dark:ring-secondary"
            >
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
              open: {
                opacity: 1,
                height: 'auto',
                transition: {
                  height: { duration: activeDuration, ease: activeEase },
                  opacity: { duration: opacityDuration }
                }
              },
              collapsed: {
                opacity: 0,
                height: 0,
                transition: {
                  height: { duration: activeDuration, ease: activeEase },
                  opacity: { duration: opacityDuration }
                }
              }
            }}
            style={{ transform: "translateZ(0)" }}
            className="overflow-hidden"
          >
            <div className="prose min-w-full pt-4 pb-1" dangerouslySetInnerHTML={{ __html: intro }} />

            <ul className="prose min-w-full list-disc pl-5">
              {subProjects.map(sub => (
                <SubAccordion 
                  key={sub.title} 
                  title={sub.title} 
                  description={sub.description} 
                  content={sub.content} 
                />
              ))}
            </ul>

            <div className="prose min-w-full pt-1" dangerouslySetInnerHTML={{ __html: outro }} />

            <div className="mt-4 flex gap-4">
              {project.data.sourceCode && (
                <a
                  href={project.data.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  <Github className="size-4" />
                  Source Code
                  <ExternalLink className="size-3.5 opacity-70" />
                </a>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}