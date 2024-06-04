export const add = (numbers: string): number => {
  let sum: number = 0;
  let delimiter: string = ',';
  let newLine: string = '\n';
  let newDelimter: string = '//';

  const lines: string[] = numbers.split(newLine);

  for (const line of lines) {
    if (line.substring(0, 2) === newDelimter) {
      delimiter = line[2];
      continue;
    }
    sum += line.split(delimiter).reduce((a, b) => a + ~~b, 0);
  }

  return sum;
};
