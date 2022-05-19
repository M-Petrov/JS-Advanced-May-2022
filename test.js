function hello(num){
  let result='';
  let number=Number(num);
for (let index = 0; index < number; index++) {
  
  
  
    result+='* '.repeat(number);
    
  result+='\n';
  result.trim;
}return result;

}
hello(1);