const isDivisible = (num) => {
    
    const convertStr = num.toString()
    const convert = convertStr.split("")
    const solution = []

    convert.forEach((e,i) => {      
        let div = e/convert[i-1]    
        if(div%2 === 1 || div%2 === 0 ){        
            solution.push(true)
        } else {        
            solution.push(false)
        }
    });

    return solution

}

console.log(isDivisible(73312))

