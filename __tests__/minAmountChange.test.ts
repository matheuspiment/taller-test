import minAmountChange from '../src/minAmountChange';

describe('minAmountChange', () => {
	describe('should throw an error', () => {
		test('when the provided param is not an array', () => {
			expect(() => minAmountChange('' as unknown as number[])).toThrow(TypeError);
		});

		test('when the provided param is not an array of numbers', () => {
			expect(() => minAmountChange([1, 4, '6', 7] as number[])).toThrow(TypeError);
		});
	});

	describe('should return the minimum value that cannot be obtained', () => {
		test('test case 1', () => {
			expect(minAmountChange([5, 7, 1, 1, 2, 3, 22])).toBe(20);
		});

		test('test case 2', () => {
			expect(minAmountChange([1, 1, 1, 1, 1])).toBe(6);
		});

		test('test case 3', () => {
			expect(minAmountChange([1, 5, 1, 1, 1, 10, 15, 20, 100])).toBe(55);
		});
	});
});
