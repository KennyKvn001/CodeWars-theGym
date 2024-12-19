function leastLarger(a, i) {
  let num = a[i];
  let largest = a.filter((n) => n > num);
  let smallest = Math.min(...largest);
  return a.indexOf(smallest);
}

// Best practice
const leastLarger = (a, i) => a.indexOf(Math.min(...a.filter((n) => n > a[i])));
