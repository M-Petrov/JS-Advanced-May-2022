function regex(input){
    input=input.toUpperCase();
    let reg=/(\w+)/g
     let res=[];
     let match=reg.exec(input)

     while(match){
res.push(match[0])
match=reg.exec(input)
     }console.log(res.join(', '))

}regex('Hi, how are you?')