const maxProfit = stocks => {
  let minPrice = stocks[0],
    maxProfit = 0;

  for (let i = 1; i < stocks.length; i++) {
    const currentPrice = stocks[i];

    minPrice = Math.min(currentPrice, minPrice);

    const profit = currentPrice - minPrice;

    maxProfit = Math.max(profit, maxProfit);
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
