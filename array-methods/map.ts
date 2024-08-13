const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const pricedObjects = prices.map((p) => ({ price: p, salePrice: p / 2 }));
console.log('Price objects', pricedObjects);

const pricesFormatted = prices.map((p) => `$${p.toFixed(2)})`);
console.log('Formatted prices', pricesFormatted);
