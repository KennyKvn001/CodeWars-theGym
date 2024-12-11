// my approach
function isNice(arr) {
  if (arr.length === 0) {
    return false;
  }
  for (let n of arr) {
    if (!arr.includes(n - 1) && !arr.includes(n + 1)) {
      return false;
    }
  }
  return true;
}

// Best practice
function isNice(arr) {
  return (
    !!arr.length &&
    arr.every((x) => arr.some((y) => y === x - 1 || y === x + 1))
  );
}
