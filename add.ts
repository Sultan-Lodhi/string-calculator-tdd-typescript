export const add = (numbers: string): number => {
  const lines = numbers.split('\n');
  let sum = 0;
  for (const line of lines) {
    sum += line.split(',').reduce((a, b) => ~~a + ~~b, 0);
  }
  return sum;
};
