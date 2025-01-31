function expandedForm(num) {
    return num.toString().split("").reverse().map((x, i) => x !== 0 ? x * Math.pow(10, i) : null ).filter(x => x).reverse().join(" + ")
  }