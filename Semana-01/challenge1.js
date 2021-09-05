function reverseString(word) {
    if( typeof word !== "string"){    
        
        throw new Error ("Tipo de dato no admitido")
        
    } else {
        const convert = word.split("")
        const lenghtConvert = convert.length
        
        if (lenghtConvert > 15 || lenghtConvert <= 1) {
            throw new Error ("Longitud no admitida")
        } else {
            const reversed = convert.reverse()
            const back = reversed.join(" ")
            return back
        }           
    }        
}


console.log(reverseString("hello world"))
console.log(reverseString("Academlo"))
console.log(reverseString("Colombia"))

console.log(reverseString("loremksksksksksskskskskksdsdsdsdsdsdsdsdsdsd"))

console.log(reverseString(true))





