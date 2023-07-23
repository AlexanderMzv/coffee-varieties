import type { CoffeeCardDTO } from "./types";
import type { CoffeeCard } from "../types";

export const mapCardData = (card: CoffeeCardDTO): CoffeeCard => {
  return { ...card, notes: card.notes.split(", ") };
};
