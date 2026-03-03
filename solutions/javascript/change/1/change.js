export class Change {
  calculate(coins, target) {
    if (target < 0) {
      throw new Error('Negative totals are not allowed.');
    }

    if (target === 0) {
      return [];
    }

    if (!coins.length) {
      throw new Error(
        `The total ${target} cannot be represented in the given currency.`
      );
    }

    const dp = Array(target + 1).fill(null);
    dp[0] = [];

    for (let amount = 1; amount <= target; amount++) {
      for (let coin of coins) {
        if (coin <= amount && dp[amount - coin] !== null) {
          const newCombination = [...dp[amount - coin], coin];

          if (
            dp[amount] === null ||
            newCombination.length < dp[amount].length
          ) {
            dp[amount] = newCombination;
          }
        }
      }
    }

    if (dp[target] === null) {
      throw new Error(
        `The total ${target} cannot be represented in the given currency.`
      );
    }

    return dp[target].sort((a, b) => a - b);
  }
}