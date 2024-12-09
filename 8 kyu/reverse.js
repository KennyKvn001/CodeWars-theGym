function digitize(n) {
  let reverse = n.toString().split("").map(Number).reverse();
  return reverse;
}
