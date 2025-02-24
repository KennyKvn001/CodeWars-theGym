function partlist(arr) {
    let result = []
    // Finding possible combinations
    for(let i = 0; i < arr.length - 1 ; i++){
      let left = arr.slice(0, i + 1).join(" ")
      let right = arr.slice(i + 1, arr.length).join(" ")
       result.push([left, right])
    }
    return result
  }