// my approach
function lovefunc(flower1, flower2) {
  console.log(flower1, flower2);
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

// best practice
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
