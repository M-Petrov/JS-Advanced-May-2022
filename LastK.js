function solve(n,k){
let result=[1]
for (let index = 1; index < n; index++) {
    result[index]=sumLastKey(result,k);
   
}function sumLastKey(array=result,k){
k = array.length > k ? k : array.length;
let count=0
for (let index = 1; index <= k; index++) {
  count+=array[array.length-index]
    
}return count;
}

return result

}solve(8,2)