export const add = (numbers: string): number => {
  return numbers.split(',').reduce((a, b) => ~~a + ~~b, 0);
};
