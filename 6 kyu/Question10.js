function count(string) {
    let counts = {}
    for(let x of string){
      counts[x] = (counts[x] || 0) + 1
    }
    return counts
  }

// Best Practice
function count (string) {  
    let count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }