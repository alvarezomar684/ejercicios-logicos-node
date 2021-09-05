const arrayOfMultiples = (num1,num2) => {    
    const solution = []
    for (let i = 1; i < num2+1; i++) {
        let product = num1 * i
        solution.push(product)       
    }
    return solution
}

console.log(arrayOfMultiples(7,5))
console.log(arrayOfMultiples(12,10))