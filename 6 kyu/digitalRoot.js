// My approach
function digitalRoot(n) {
    while (n >= 10){
      n = n.toString().split("").map(Number).reduce((a, b) => a + b);
    }
    return n;
  }

//   Best practice 
  function digital_root(n) {
    return (n - 1) % 9 + 1;
  } 