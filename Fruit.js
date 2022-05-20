function fruit(fruit,weightGR,pricePerKG){
    let price=(weightGR/1000)*pricePerKG;
    let kg=weightGR/1000;
    console.log(`I need $${price.fixed(2} to buy ${kg.fixed(2} kilograms ${fruit}.`)

}fruit('orange', 2500, 1.80)
