function solve(s) {
    let results = s.split("").map((n) => (isNaN(n) ? " ": n)).join("").split(" ").filter((num) => (num !== "")).map(Number)
    
    return Math.max(...results)
    
  };

//  Best practice 
function solve(s){
    return Math.max(...s.match(/\d+/g));
  };