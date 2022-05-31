/**
 * Define the minimum amount of change (the minimum sum of money)
 * that you CANNOT create, given an array of coins.
 *
 * @param coins Array representing the coin values.
 *
 * @returns The minimum value that cannot be obtained.
 */
function minAmountChange(coins: number[]) {
	if (!Array.isArray(coins)) {
		throw new TypeError('`coins` must be an array');
	}

	coins.forEach((value, index) => {
		if (typeof value !== 'number') {
			throw new TypeError(`\`coins[${index}]\` must be an array - got ${typeof value}`);
		}
	});

	const ascCoins = [...coins].sort((a, b) => a - b);

	let minAmount = 0;

	for (let i = 0; i < ascCoins.length; i++) {
		if (ascCoins[i] > minAmount + 1) {
			return minAmount + 1;
		}

		minAmount += ascCoins[i];
	}

	return minAmount + 1;
}

export default minAmountChange;
