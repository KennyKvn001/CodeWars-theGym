// My approach
function catMouse(x) {
  let dots = x.match(/[\.]/gi) || [];
  if (dots.length > 3) {
    return "Escaped!";
  } else {
    return "Caught!";
  }
}

// Best practice
function catMouse(x) {
  return x.length <= 5 ? "Caught!" : "Escaped!";
} // very interesting
