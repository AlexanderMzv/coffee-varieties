import { endpoints } from "./endpoints";
import type { CoffeeCardDTO } from "./types";
import { mapCardData } from "./mappers";
import type { CoffeeCard } from "../types";

export const fetchCard = async (): Promise<CoffeeCard> => {
  const response = await fetch(endpoints.coffeeCard);

  if (response.ok) {
    const cardData = (await response.json()) as CoffeeCardDTO;

    return mapCardData(cardData);
  } else {
    console.error("Error loading data with status: ", response.status);
  }
};
