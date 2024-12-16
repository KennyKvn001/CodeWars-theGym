function plural(n) {
  if (n === 1) {
    return false;
  } else {
    return true;
  }
}

// Best practice
function plural(n) {
  return n !== 1;
}
