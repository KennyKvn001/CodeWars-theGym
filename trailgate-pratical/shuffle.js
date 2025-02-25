let arr = [1, 2, 3, 4, 5]

function Shuffle(arr){
    let randomIndex = []
    // const set1 = new Set()
    while(randomIndex.length < arr.length){
        let num = Math.floor(Math.random() * arr.length)
        if (!randomIndex.includes(num)){randomIndex.push(num)}
        // set1.add(num)
    }

    // return [...set1].map(p => arr[p])
    return randomIndex
}

console.log(Shuffle(arr))
