export const add = (numbers: string): number => {
  const lines = numbers.split('\n');
  let sum = lines[0].split(',').reduce((a, b) => ~~a + ~~b, 0);
  if (lines[1]) sum += add(lines[1]);
  return sum;
};
