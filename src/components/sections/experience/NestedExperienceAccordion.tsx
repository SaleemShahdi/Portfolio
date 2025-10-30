import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Marked } from 'marked';

// Helper to render Markdown HTML
const MarkdownContent = ({ htmlContent }) => {
  return <div className="prose prose-li:leading-8 min-w-full" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

// Sub-Accordion for nested items (Client Experience, Training)
// This is now styled to match the main experience accordions.
const SubAccordion = ({ title, description, skills }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const renderedContent = new Marked().parse(description);

  return (
    <li className="flex flex-col py-2 not-last:border-b"> {/* Use li for semantics */}
      {/* Clickable Header Area for Sub-Accordion */}
      <motion.header
        initial={false}
        onClick={toggleOpen}
        className="flex cursor-pointer list-none flex-col text-left"
      >
        {/* Top part: Title */}
        <div className="mb-1"> {/* Less margin than parent */}
          {/* This 'h3' tag will use Roboto Condensed.
            We use 'text-base' and 'font-semibold' to style it as a sub-heading.
          */}
          <h3 className="text-base font-semibold">{title}</h3>
        </div>

        {/* SINGLE Toggling Button - Copied from main accordion */}
        <button
          onClick={(e) => { e.stopPropagation(); toggleOpen(); }}
          className="mt-1 flex cursor-pointer items-center gap-1 text-sm font-medium text-primary hover:underline self-start"
          aria-expanded={isOpen}
        >
          {isOpen ? "Show less" : "Show more"}
          {isOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
        </button>
      </motion.header>

      {/* Expandable Content Section for Sub-Accordion */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto', marginTop: '1rem' },
              collapsed: { opacity: 0, height: 0, marginTop: '0rem' },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <MarkdownContent htmlContent={renderedContent} />
            {/* Skills Tags for the sub-position */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span key={skill} className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-secondary">
                  {skill}
                </span>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </li>
  );
};


// Main Accordion (for "Revature")
export function NestedExperienceAccordion({ companyName, position }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="experience-item flex w-full flex-col p-4 not-last:border-b">
      {/* Clickable Header Area */}
      <motion.header
        initial={false}
        onClick={toggleOpen}
        className="flex cursor-pointer list-none flex-col text-left"
      >
        {/* Top part: Company, Role, Period */}
        <div className="mb-2">
          {/* Company Name: <p> tag (Geist Sans) + original <h3> styles (text-lg font-semibold) */}
          <p className="text-lg font-semibold">{companyName}</p>
          {/* Role Title: <h3> tag (Roboto Condensed) + original <p> styles (text-base text-muted-foreground) */}
          <h3 className="text-base font-normal text-muted-foreground">{position.title}</h3>
          {/* Time Period: <h3> tag (Roboto Condensed) + original <p> styles (text-sm font-light text-muted-foreground) */}
          <h3 className="text-sm font-light text-muted-foreground">{position.year}</h3>
        </div>

        {/* SINGLE Toggling Button */}
        <button
          onClick={(e) => { e.stopPropagation(); toggleOpen(); }}
          className="mt-1 flex cursor-pointer items-center gap-1 text-sm font-medium text-primary hover:underline self-start"
          aria-expanded={isOpen}
        >
          {isOpen ? "Show less" : "Show more"}
          {isOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
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
              open: { opacity: 1, height: 'auto', marginTop: '1rem' },
              collapsed: { opacity: 0, height: 0, marginTop: '0rem' },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            {/* Render the sub-accordions with indentation */}
            <ul className="list-none p-0 pl-4"> {/* Added pl-4 for indentation */}
              {position.subPositions.map(subPos => (
                <SubAccordion
                  key={subPos.title}
                  title={subPos.title}
                  description={subPos.description}
                  skills={subPos.skills}
                />
              ))}
            </ul>

          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}