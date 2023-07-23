import type { CoffeeCardDTO } from "../api/types";

export interface CoffeeCard extends Omit<CoffeeCardDTO, "notes"> {
  notes: string[];
}
