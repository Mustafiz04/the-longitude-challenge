import { Country } from "@/types/country";
import { countryHints } from "@/constants/countryHints"; // Importing from the new constants file

interface Hint {
  text: string;
  points: number;
}

interface HintSequence {
  hints: Hint[];
  difficulty: "easy" | "medium" | "hard";
}

export const getCountryHintSequences = (country: Country): HintSequence[] => {
  const sequences = countryHints[country.code];
  if (!sequences) {
    // Return default hints if no specific hints are defined
    return [
      {
        difficulty: "medium",
        hints: [
          {
            text: `This country is located in ${country.continent}`,
            points: 1,
          },
          { text: `The capital city is ${country.capital}`, points: 3 },
          {
            text: `This country's flag has ${country.flagColors.length} colors`,
            points: 5,
          },
          {
            text: `The flag colors include: ${country.flagColors.join(", ")}`,
            points: 7,
          },
          {
            text: `Famous cuisine includes: ${country.cuisine.join(", ")}`,
            points: 10,
          },
          { text: `Popular sports: ${country.sports.join(", ")}`, points: 12 },
          {
            text: `Famous landmarks: ${country.landmarks.join(", ")}`,
            points: 15,
          },
          {
            text: `Historical events: ${country.historicalEvents[0]}`,
            points: 17,
          },
          {
            text: `Famous personalities: ${country.famousPersonalities.join(
              ", "
            )}`,
            points: 18,
          },
          {
            text: `Cultural traditions: ${country.traditions.join(", ")}`,
            points: 20,
          },
        ],
      },
    ];
  }
  return sequences;
};
