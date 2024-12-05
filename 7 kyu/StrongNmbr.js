// my approach
function strong(n) {
  function fact(k) {
    if (k === 0 || k === 1) {
      return 1;
    }
    return k * fact(k - 1);
  }
  let nums = n.toString().split("");
  const sumF = nums.reduce((sum, num) => {
    return sum + fact(Number(num));
  }, 0);

  return sumF === n ? "STRONG!!!!" : "Not Strong !!";
}

// best practice
function strong(n) {
  return n ==
    n
      .toString()
      .split("")
      .reduce((a, b) => a + factorial(b), 0)
    ? "STRONG!!!!"
    : "Not Strong !!";
}

function factorial(n) {
  var f = 1;
  for (var i = 1; i <= n; i++) {
    f *= i;
  }
  return f;
}
