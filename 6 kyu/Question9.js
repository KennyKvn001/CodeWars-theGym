function expandedForm(num){
    let [intPart, fracPart] = num.toString().split(".")

    let intExp = intPart.split("").reverser().map((x, i) => x !== 0 ? x * Math.pow(10, i) : null).reverse().filter(x => x)
    let fracExp = fracPart.split("").map((x, i) => {
        return x !== 0 ? `${x}/${Math.pow(10, i + 1)}` : null
    }).filter(x => x)

    let result = intExp.concat(fracExp).join(" + ")
    return result
}