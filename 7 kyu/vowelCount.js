function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
// saved best practice

// My approach
function getCount(str) {
  let vowels = "aeiou";
  let count = 0; // Initialize a counter

  for (let i of str) {
    if (vowels.includes(i)) {
      count++;
    }
  }

  return count;
}
