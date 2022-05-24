function solve(matrix){
    let result=true

    for (let rows = 0; rows < matrix.length-1; rows++) {
        let firstRow=matrix[rows].reduce((a,b)=>a+b,0)
        let secondRow=matrix[rows+1].reduce((a,b)=>a+b,0)
        let colOne=0;
        let colTwo=0;
       
       
        for (let cols = 0; cols < matrix.length; cols++) {
       colOne+=matrix[rows][cols]
       colTwo+=matrix[rows+1][cols]

       }
        if(colOne!==colTwo||firstRow!==secondRow){
            result=false
        }
    }console.log(result)
}solve([[4, 5, 6],

    [6, 5, 4],
    
    [5, 5, 5]])
    solve([[11, 32, 45], [21, 0, 1], [21, 1, 1]])