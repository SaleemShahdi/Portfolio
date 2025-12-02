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
  const [isTouch, setIsTouch] = useState(false);

  // Unified handler: Detects input type directly from the event
  const toggleOpen = (e) => {
    // Check native event for pointerType ('mouse', 'touch', or 'pen')
    const isTouchInput = e.nativeEvent?.pointerType === 'touch';
    setIsTouch(isTouchInput);
    setIsOpen(!isOpen);
  };

  // CONSTANT VELOCITY CALCULATION (Calibrated to Advanced C Kernel)
  // Reference: ~1200 chars = 0.3s. Ratio = 0.00025s per char.
  const contentLength = renderedContent ? renderedContent.length : 0;
  
  // Formula: CharCount * 0.00025
  // Clamped: Min 0.25s (to prevent instant vanish), Max 0.8s (to prevent drag)
  const calculatedDuration = Math.min(Math.max(contentLength * 0.00025, 0.25), 0.8);

  const activeDuration = isTouch ? 0.5 : calculatedDuration;
  const activeEase = isTouch ? "easeInOut" : "easeOut";

  // Opacity: Instant (0s) on open for Mouse, 0.5s for Touch
  const opacityOpen = isTouch ? 0.5 : 0;
  const opacityClose = isTouch ? 0.5 : 0.3;

  return (
    <div className="project-item group w-full flex-col p-4 not-last:border-b">
      <motion.header
        initial={false}
        onClick={toggleOpen}
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
              transition={{ duration: 0.5 }}
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
              open: {
                opacity: 1,
                height: 'auto',
                transition: {
                  height: { duration: activeDuration, ease: activeEase },
                  opacity: { duration: opacityOpen }
                }
              },
              collapsed: {
                opacity: 0,
                height: 0,
                transition: {
                  height: { duration: activeDuration, ease: activeEase },
                  opacity: { duration: opacityClose }
                }
              }
            }}
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