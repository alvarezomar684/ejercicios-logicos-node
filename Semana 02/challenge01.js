const twoSums = (arr,num) => {    
    let solution = []
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i] + arr[i+1]        
        if(sum === num){            
            solution.push(i,i+1)
        }
    }
    return solution
}

console.log(twoSums([2,7,11,15], 9))
console.log(twoSums([3,2,4], 6))
console.log(twoSums([3,3], 6))
