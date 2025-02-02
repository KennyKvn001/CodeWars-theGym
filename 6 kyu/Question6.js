function latestClock(a, b, c, d) {
    const digits = [a, b, c, d];
  
    //Generate all permutations
    function generatePermutations(array) {
      if (array.length === 0) return [[]];
      const result = [];
      for (let i = 0; i < array.length; i++) {
        const current = array[i];
        const remaining = array.slice(0, i).concat(array.slice(i + 1));
        const perms = generatePermutations(remaining);
        perms.forEach((perm) => result.push([current, ...perm]));
      }
      return result;
    }
  
    const permutations = generatePermutations(digits);
  
    //Sort permutations in descending order
    const sortedPermutations = permutations
      .map((perm) => perm.join("")) 
      .sort((a, b) => b.localeCompare(a)); 
  
    //Find the latest valid time
    for (const perm of sortedPermutations) {
      const hours = parseInt(perm.slice(0, 2)); 
      const minutes = parseInt(perm.slice(2)); 
  
      // Check if the time is valid
      if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
        return `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}`;
      }
    }
  
    return null;
  }
  
  