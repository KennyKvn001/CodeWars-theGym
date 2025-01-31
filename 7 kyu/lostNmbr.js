function findDeletedNumber(arr, mixArr) {
    sumA = arr.reduce((a, b) => a + b, 0);
     sumB = mixArr.reduce((c, d) => c + d, 0);
     return sumA - sumB 
   }