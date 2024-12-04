function balancedNum(number) {
  const strNum = number.toString();
  const length = strNum.length;

  if (length % 2 === 0) {
    let midL = length / 2 - 1;
    let midR = length / 2;
    leftPart = strNum.slice(0, midL);
    rightPart = strNum.slice(midR + 1);
  } else {
    const mid = Math.floor(length / 2);
    leftPart = strNum.slice(0, mid);
    rightPart = strNum.slice(mid + 1);
  }

  // Calculate the sums of the left and right parts
  const leftSum = [...leftPart].reduce((a, b) => a + parseInt(b), 0);
  const rightSum = [...rightPart].reduce((a, b) => a + parseInt(b), 0);

  // Return the balance status
  return leftSum === rightSum ? "Balanced" : "Not Balanced";
}
