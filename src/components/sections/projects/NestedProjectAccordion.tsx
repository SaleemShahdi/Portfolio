import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, ExternalLink } from 'lucide-react';
import { Marked } from 'marked';

const SubAccordion = ({ title, description, content, parentIsTouch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTouch, setIsTouch] = useState(parentIsTouch);
  
  const htmlContent = new Marked().parse(content);

  const toggleOpen = (e) => {
    const isTouchInput = e.nativeEvent?.pointerType === 'touch';
    setIsTouch(isTouchInput);
    setIsOpen(!isOpen);
  };

  const contentLength = content ? content.length : 0;
  const rawDuration = contentLength * 0.00025;
  const calculatedDuration = Math.min(Math.max(rawDuration, 0.25), 0.8);
  
  const openDuration = isTouch ? 0.5 : calculatedDuration;
  const closeDuration = openDuration;
  const activeEase = isTouch ? "easeInOut" : "easeOut";
  const opacityDuration = isTouch ? 0.5 : 0.4;

  return (
    <li className="py-2 not-last:border-b">
      <motion.header
        initial={false}
        onClick={toggleOpen}
        className="flex cursor-pointer items-center justify-between"
      >
        <div className="prose">
          <p className="m-0">
            <strong className="font-semibold">{title}:</strong> {description}
          </p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.5 }}
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
              open: {
                opacity: 1,
                height: 'auto',
                transition: {
                  height: { duration: openDuration, ease: activeEase },
                  opacity: { duration: opacityDuration }
                }
              },
              collapsed: {
                opacity: 0,
                height: 0,
                transition: {
                  height: { duration: closeDuration, ease: activeEase },
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
  const [isTouch, setIsTouch] = useState(false);

  const toggleOpen = (e) => {
    const isTouchInput = e.nativeEvent?.pointerType === 'touch';
    setIsTouch(isTouchInput);
    setIsOpen(!isOpen);
  };

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

  const introLen = parts[0] ? parts[0].length : 0;
  const outroLen = (parts.length > 1 && !parts[parts.length-1].startsWith('- **')) ? parts[parts.length-1].length : 0;
  const headersLen = subProjects.length * 150; 
  const effectiveLength = introLen + outroLen + headersLen;

  const rawDuration = effectiveLength * 0.00025;
  const calculatedDuration = Math.min(Math.max(rawDuration, 0.25), 0.8);

  const activeDuration = isTouch ? 0.5 : calculatedDuration;
  const closeDuration = activeDuration;
  const activeEase = isTouch ? "easeInOut" : "easeOut";
  const opacityDuration = isTouch ? 0.5 : 0.4;

  return (
    <div className="project-item group flex w-full flex-col p-4 not-last:border-b">
       <motion.header
        initial={false}
        onClick={toggleOpen}
        className="flex cursor-pointer list-none flex-col gap-y-3 text-left"
      >
        <div className="flex items-center justify-between">
          {/* UNDERLINE REMOVED HERE */}
          <h3 className="text-lg font-semibold">
            {project.data.name}
          </h3>
          
          <div className="flex items-center">
            {/* UNDERLINE ADDED HERE */}
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
                  height: { duration: closeDuration, ease: activeEase },
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
                  parentIsTouch={isTouch} 
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