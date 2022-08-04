import { checkArray, joinArray } from './numberArray';

test('checkArray', () => {
    expect(checkArray([1, 2, 3, 4, 5])).toBe(true);
    expect(checkArray([1, 2, 3, 4, 'five'])).toBe(false);
    expect(checkArray(['1', '2', '3', '4', '5'])).toBe(false);
});

test('joinArray', () => {
    expect(joinArray([1, 2, 3], [4, 5, 6])).toMatchObject([1, 2, 3, 4, 5, 6]);
    expect(() => joinArray([1, 2, 3], [4, 5, 'a'])).toThrow('Exception message');
});