function isValidWalk(walk) {
    if(walk.length !== 10) {
      return false 
    }
    let x = 0; // for east-west
    let y = 0; // for north-south
    for(let step of walk){
      if(step === 'n') y++;
      if(step === 's') y--;
      if(step === 'e') x++;
      if(step === 'w') x--;
    }
    return x === 0 && y === 0
  }

//   Best practice
function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
  }