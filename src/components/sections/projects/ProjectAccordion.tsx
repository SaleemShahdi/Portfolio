import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, ExternalLink } from 'lucide-react';

const MarkdownContent = ({ htmlContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export function ProjectAccordion({ project, renderedContent }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const toggleOpen = (e) => {
    // Simple, native check for touch devices (Phones/Tablets)
    const isTouchInput = e.nativeEvent?.pointerType === 'touch';
    setIsTouch(isTouchInput);
    setIsOpen(!isOpen);
  };

  // --- ANIMATION LOGIC ---
  const contentLength = renderedContent ? renderedContent.length : 0;
  
  // Calculated "Snappy" Duration
  const rawDuration = contentLength * 0.00025;
  const calculatedDuration = Math.min(Math.max(rawDuration, 0.25), 0.8);

  // If it's a touch device, use fixed 0.5s. Otherwise use calculated snappy speed.
  const activeDuration = isTouch ? 0.5 : calculatedDuration;
  const closeDuration = activeDuration;
  
  const activeEase = isTouch ? "easeInOut" : "easeOut";
  const opacityDuration = isTouch ? 0.5 : 0.4;

  return (
    <div className="project-item group w-full flex-col p-4 not-last:border-b">
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
            <span className="text-xs font-medium text-primary mr-2 underline-offset-4 group-hover:underline">
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
            <div className="prose prose-li:leading-8 prose-ul:mt-0 min-w-full">
              <MarkdownContent htmlContent={renderedContent} />
            </div>

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
              {project.data.preview && (
                <a
                  href={project.data.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  <ExternalLink className="size-4" />
                  Live Demo
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