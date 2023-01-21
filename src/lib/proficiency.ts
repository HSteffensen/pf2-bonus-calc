export enum Proficiency {
    Untrained = "0",
    Trained = "level + 2",
    Expert = "level + 4",
    Master = "level + 6",
    Legendary = "level + 8",
}

export const allProficiencies = [
    "Untrained",
    "Trained",
    "Expert",
    "Master",
    "Legendary",
] as const;

export function proficiencyBonus(level: number, proficiency: Proficiency) {
    switch (proficiency) {
        case Proficiency.Untrained:
            return 0;

        case Proficiency.Trained:
            return level + 2;

        case Proficiency.Expert:
            return level + 4;

        case Proficiency.Master:
            return level + 6;

        case Proficiency.Legendary:
            return level + 8;
    }
}
