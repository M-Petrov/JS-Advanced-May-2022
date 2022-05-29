function solve(input){
const result={}

for (const key of input) {
    const info=key.split(' :' )
    const name=info[0]
    const firstLetter=name.charAt(0)
  const price=Number(info[1])
  if(!result[firstLetter]){
      result[firstLetter]={}
  }
  result[firstLetter][name]=price
}let sortedLetters=Object.keys(result).sort((a,x)=>a.localeCompare(x))
for (let index = 0; index < sortedLetters.length; index++) {
  const currentLetter=sortedLetters[index]
console.log(currentLetter)
let sortedProducts=Object.keys(result[currentLetter]).sort((a,b)=>a.localeCompare(b))
for (const iterator of sortedProducts) {
  console.log(`  ${iterator}:${result[currentLetter][iterator]}`)
}
  
}
}solve(['Appricot : 20.4','Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])