import { expect, describe, test } from 'vitest';
import { add } from './add';

describe('add should', () => {
  test('return 0 when given string is empty', () => {
    expect(add('')).toEqual(0);
  });
  test('return the number itself when given string contains one number', () => {
    expect(add('1')).toEqual(1);
  });
  test('return the sum of two numbers when given string contains two numbers', () => {
    expect(add('1,2')).toEqual(3);
  });
  test('return the sum of three numbers when given string contains three numbers', () => {
    expect(add('1,2,3')).toEqual(6);
  });
  test('return the sum of four numbers when given string contains four numbers', () => {
    expect(add('1,2,3,4')).toEqual(10);
  });
  test('return the sum of numbers when given string contains one new line', () => {
    expect(add('1,2\n3')).toEqual(6);
  });
  test('return the sum of numbers when given string contains two new line', () => {
    expect(add('1,2\n3\n4')).toEqual(10);
  });
});
