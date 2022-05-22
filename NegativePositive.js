function solve(input){
    let result=[]
    for (let num of input) {
       if(num>=0){
           result.push(num)
       }else{
           result.unshift(num)
       }
        
    }for (const i of result) {
       console.log(i)
    }
}solve([7, -2, 8, 9])