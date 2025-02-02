function solution(number) {
  // return 0 for negative number
  if (number < 0) {
    return 0;
  }
  // return sum of multiples of 3 or 5
  let count = 0;
  for (i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      count += i;
    }
  }
  return count;
}
