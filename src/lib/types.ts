export type ExperiencePosition = {
    title: string;
    year: string;
    description?: string; // Make optional
    skills?: string[];    // Make optional
    subPositions?: ExperiencePosition[]; // Add optional sub-positions array
};

export type Experience = {
    company: string;
    positions: ExperiencePosition[];
};