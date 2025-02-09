import { Country } from "@/types/country";
import { countries } from "@/constants/countries"; // Importing from the new constants file

// Removed the countries array from here
// const countries: Country[] = [
//   // ... (countries data)
// ];

export const getRandomCountry = (): Country => {
  const randomIndex = Math.floor(Math.random() * countries.length);
  return countries[randomIndex];
};
