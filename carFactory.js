function solve(wantedCar){
   const engines=[{power: 90, volume: 1800 },{ power: 120, volume: 2400 },{ power: 200, volume: 3500 }]
   const carriages=[{type: 'hatchback', color: wantedCar.color},{type: 'coupe', color: wantedCar.color}]
   const wheelsSize=wantedCar.wheelsize%2!==0?wheels=wantedCar.wheelsize:wheels=wantedCar.wheelsize-1
   const resultCar={
      engine:engines.filter(e=>e.power>=wantedCar.power)[0],
     model:wantedCar.model,
     carriage:carriages.filter(c=>c.type==wantedCar.carriage)[0],
     wheels:[wheelsSize,wheelsSize,wheelsSize,wheelsSize],
     
   }
   console.log(this.wheels)
return resultCar
}console.log(solve({ model: 'VW Golf II',

power: 90,

color: 'blue',

carriage: 'hatchback',

wheelsize: 14 }))