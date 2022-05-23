function solve(matrix){
    let firstSum=0;
    let secondSum=0;
   
for (let cols = 0; cols < matrix.length; cols++) {
    firstSum+=Number(matrix[cols][cols])
    secondSum+=Number(matrix[matrix.length-cols-1][cols])
}        
    console.log(`${firstSum} ${secondSum}`)
    
}solve([[20, 50, 190],

[8, 33, 145],
[1,1,1]])