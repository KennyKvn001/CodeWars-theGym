function egged(year, span) {
    if(year<1){
      return "No chickens yet!";
    }
  //   egg production each year
    let productionPerYear = [300];
    for(let i = 1; i < year; i++) {
      productionPerYear[i] = Math.floor(productionPerYear[i-1] * 0.8);
    }
  //   Each year contribution
    return Array(year).fill(0).map((_, i) => {
      return 3 * productionPerYear[i % span] * +(i < span);
    }).reduce((prev, curr) => prev+curr);
  }