import moveElement from './moveElement';

describe('moveElement()', () => {
  describe('that receives an array of elements', () => {
    test('and switch the first element to the last position', () => {
      const array = [1, 51, 41, 8];
      const elements = moveElement(array, 0, array.length);

      expect(elements).toEqual([51, 41, 8, 1]);
    });
  });
});
