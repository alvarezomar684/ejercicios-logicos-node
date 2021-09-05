const reverseInt = (num) => {
    
    if( typeof num !== "number"){    
        
        throw new Error ("Tipo de dato no admitido")
        
    } else {

    
        const converStr = num.toString()
        const convertArr = converStr.split("")
        const reverse = convertArr.reverse()
        const lastItem = reverse.length

        if (reverse[lastItem - 1] === "-") {
            reverse.pop()
            reverse.unshift("-")
        }
        const convertStr2 = reverse.join("")
        const convetNum = parseInt(convertStr2, 10)
        return convetNum
    }
}




console.log(reverseInt(123))
console.log(reverseInt(13689))
console.log(reverseInt(13940))
console.log(reverseInt(-13940))
console.log(reverseInt("012432"))
console.log(reverseInt("312soe"))
console.log(reverseInt("Academ213"))






