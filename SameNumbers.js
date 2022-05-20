function sameNumbers(numbers){
    let result=0;
    let same=true;
    let input=String(numbers);
    let first=input[0];
    for (let index = 0; index < input.length; index++) {
        result+=Number(input[index]);
       if(first===input[index]){

       }else{
        same=false;
       }
    }
    console.log(same);
    console.log(result);
}sameNumbers('2222222')