function fuelPrice(litres, pricePerLitre) {
  const discount = Math.min(0.05 * Math.floor(litres / 2), 0.25);
  const price = pricePerLitre - discount;
  const cost = litres * price;

  return parseFloat(cost.toFixed(2));
}
