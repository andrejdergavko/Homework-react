export function max(prices, money) {
  const sortPrices = prices.sort((a, b) => a - b);
  let balance = money;

  return sortPrices.reduce((previous, current) => {
    balance = balance - current;

    if (balance >= 0) {
      return previous + 1;
    }

    return previous;
  }, 0);
}
