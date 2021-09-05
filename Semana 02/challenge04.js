const partOfEarth = (countryName,countryArea) => { 
  const earthArea = 148940000
  const percentage = (countryArea/earthArea)*100
  const percentRound = percentage.toFixed(2)
  let result = {
    percent:percentRound,
    message:`${countryName} representa el ${percentRound}% de la masa de la tierra`
  }
  return result
}

console.log(partOfEarth("Rusia",17098242)) 
console.log(partOfEarth("USA",9372610)) 


