import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Removed Dot and Code icons from import
import { ChevronDown, ChevronUp } from 'lucide-react'; 

// Helper to render Markdown HTML
const MarkdownContent = ({ htmlContent }) => {
  // Apply prose classes for styling consistent with projects, and line spacing
  return <div className="prose prose-li:leading-8 min-w-full" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export function ExperienceAccordion({ companyName, position, renderedContent }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="experience-item flex w-full flex-col p-4 not-last:border-b"> {/* Added class */}
      {/* Clickable Header Area */}
      <motion.header
        initial={false}
        onClick={toggleOpen} // Allow clicking anywhere on header to toggle
        // Add cursor-pointer to the whole header
        className="flex cursor-pointer list-none flex-col text-left"
      >
        {/* Top part: Company, Role, Period - FONT STYLES CORRECTED */}
        <div className="mb-2"> {/* Added margin-bottom for spacing */}
          {/* Company Name: <p> tag (Geist Sans) + original <h3> styles (text-lg font-semibold) */}
          <p className="text-lg font-semibold">{companyName}</p>
          {/* Role Title: <h3> tag (Roboto Condensed) + original <p> styles (text-base text-muted-foreground) */}
          <h3 className="text-base font-normal text-muted-foreground">{position.title}</h3>
          {/* Time Period: <h3> tag (Roboto Condensed) + original <p> styles (text-sm font-light text-muted-foreground) */}
          <h3 className="text-sm font-light text-muted-foreground">{position.year}</h3>
        </div>

        {/* SINGLE Toggling Button */}
        <button
          onClick={(e) => { e.stopPropagation(); toggleOpen(); }} // Prevent header click trigger
          // Added cursor-pointer here
          className="mt-1 flex cursor-pointer items-center gap-1 text-sm font-medium text-primary hover:underline self-start" // Left align
          aria-expanded={isOpen}
        >
          {isOpen ? "Show less" : "Show more"}
          {/* Animated Chevron */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="size-4" />
          </motion.div>
        </button>

      </motion.header>

      {/* Expandable Content Section */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto', marginTop: '1rem' }, // Add margin-top when open
              collapsed: { opacity: 0, height: 0, marginTop: '0rem' },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            {/* Description */}
            <MarkdownContent htmlContent={renderedContent} />

            {/* Skills Tags */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {position.skills.map((skill) => (
                <span key={skill} className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-secondary">
                  {skill}
                </span>
              ))}
            </div>

          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}