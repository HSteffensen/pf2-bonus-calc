export const PROFICIENCIES = {
    Untrained: "Untrained",
    Trained: "Trained",
    Expert: "Expert",
    Master: "Master",
    Legendary: "Legendary",
} as const;

export const ALL_PROFICIENCIES = Object.keys(PROFICIENCIES) as Array<keyof typeof PROFICIENCIES>;

export type Proficiency = keyof typeof PROFICIENCIES;

export function calculateProficiencyBonus(level: number, proficiency: Proficiency): number {
    switch (proficiency) {
        case PROFICIENCIES.Untrained:
            return 0;

        case PROFICIENCIES.Trained:
            return level + 2;

        case PROFICIENCIES.Expert:
            return level + 4;

        case PROFICIENCIES.Master:
            return level + 6;

        case PROFICIENCIES.Legendary:
            return level + 8;
    }
}
