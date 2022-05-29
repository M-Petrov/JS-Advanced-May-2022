function solve(inputArray){
    const object={}


for (const line of inputArray) {

    let info=line.split(' | ')
  let town=info[0]
  let product=info[1]
  let price=Number(info[2])
  if(!object[product]){
object[product]={town,price}
  }else{
      if(object[product].price>price){
          object[product]={town,price}
      }
  }
}productNames=Object.keys(object)
for (let index = 0; index < productNames.length; index++) {

    let productName=productNames[index]
    console.log(`${productName} -> ${object[productName].price} (${object[productName].town})`)
}

}solve(['Sample Town | Sample Product | 1000',

'Sample Town | Orange | 2',

'Sample Town | Peach | 1',

'Sofia | Orange | 3',

'Sofia | Peach | 2',

'New York | Sample Product | 1000.1',

'New York | Burger | 10'])