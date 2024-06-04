import { expect, describe, test } from 'vitest';
import { add } from './add';

describe('add should', () => {
  test('return 0 when given string is empty', () => {
    expect(add('')).toEqual(0);
  });
});
