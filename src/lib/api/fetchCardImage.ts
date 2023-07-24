import { endpoints } from "./endpoints";

export const fetchCardImage = async (): Promise<string> => {
  const response = await fetch(endpoints.cardImage);

  if (response.ok) {
    const blob = await response.blob();

    return URL.createObjectURL(blob);
  } else {
    console.error("Error loading image with status: ", response.status);
  }
};
