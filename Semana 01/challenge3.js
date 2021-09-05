function UpperCase (str) {
    let toUp = str[0].toUpperCase()    

    for(letter in str){
        
        if(str[letter -1 ] === " " ){
            toUp += str[letter].toUpperCase()
        }else {
            toUp += str[letter]
        }
    }

    const convert = toUp.split("")
    convert.splice(1,1)    
    const reverse = convert.join("")
    return reverse
}

console.log(UpperCase("i love javascript"))
console.log(UpperCase("hello world"))
console.log(UpperCase("welcome to academlo"))