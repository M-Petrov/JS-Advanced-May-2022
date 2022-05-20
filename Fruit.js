function fruit(fruit,weightGR,pricePerKG){
    let price=(weightGR/1000)*pricePerKG;
    let kg=weightGR/1000;
    console.log(`I need $${price} to buy ${kg} kilograms ${fruit}.`)

}fruit('orange', 2500, 1.80)