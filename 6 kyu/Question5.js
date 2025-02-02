function branch(n){
    if(n === 1) return 0
    
    const Layer = Math.ceil((Math.sqrt(n) +1)/ 2);
    // const endOfLayer = (2 * Layer - 1)** 2;
    const startOfLayer = (2 * (Layer - 1) - 1)** 2 + 1;
    const position = n - startOfLayer;
    const sideLength = 2 * Layer - 2;
    const branch = Math.floor(position / sideLength);
    return branch;
  }