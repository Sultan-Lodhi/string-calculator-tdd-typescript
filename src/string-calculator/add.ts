export const add = (numbers: string): number => {
  let sum = 0;
  let delimiter = ',';
  let newLine = '\n';
  let newDelimter = '//';
  let negativeNumbers: string[] = [];

  const lines: string[] = numbers.split(newLine);

  for (const line of lines) {
    if (line.substring(0, 2) === newDelimter) {
      delimiter = line[2];
      continue;
    }
    const values: string[] = line.split(delimiter);
    for (const val of values) {
      if (Number(val) > 0) sum += Number(val);
      else val && negativeNumbers.push(val);
    }
  }

  if (negativeNumbers.length) throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);

  return sum;
};
