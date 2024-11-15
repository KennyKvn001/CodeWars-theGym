let numbrs = [1, 1, 1, 2, 2, 2, 3, 3, 3];

const removeDupl = function (numbrs) {
  result = [];
  for (let i = 0; i < numbrs.length; i++) {
    if (numbrs[i] !== numbrs[i - 1]) {
      result.push(numbrs[i]);
    }
  }
  console.log(result);
};
removeDupl(numbrs);
