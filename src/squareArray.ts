/**
 * Squares the array values.
 *
 * @param values Array with values sorted in ascending order that will be squared.
 *
 * @returns The squered array sorted in ascending order.
 */
function squareArray(values: number[]) {
	const squared = values.map(value => value ** 2);

	return squared.sort((a, b) => a - b);
}

export default squareArray;
