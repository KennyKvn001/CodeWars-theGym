function doubleChar(str) {
  return str
    .split("")
    .flatMap((n) => [n, n])
    .join("");
}

// Another way
const doubleChar = (str) =>
  str
    .split("")
    .map((c) => c + c)
    .join("");
