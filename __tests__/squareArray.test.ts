import squareArray from '../src/squareArray';

describe('squareArray', () => {
	test('should return the squared values in asc order', () => {
		// Asc ordered array of positive intergers
		expect(squareArray([1, 2, 3, 5, 6, 8, 9])).toStrictEqual([
			1, 4, 9, 25, 36, 64, 81,
		]);

		// As ordered array of negative intergers
		expect(squareArray([-2, -1])).toStrictEqual([1, 4]);

		// Sample with positive and negative integers
		expect(squareArray([-10, -5, 0, 5, 10])).toStrictEqual([
			0, 25, 25, 100, 100,
		]);
	});
});
