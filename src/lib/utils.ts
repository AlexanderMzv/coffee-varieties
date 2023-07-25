interface GetChipColorParams {
  colors: string[];
  index: number;
}

export const getChipColor = ({ colors, index }: GetChipColorParams): string => {
  const computedColorIndex = index % colors.length;

  return colors[computedColorIndex];
};
