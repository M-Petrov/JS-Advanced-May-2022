function solve(input){
    input.sort(sorted)
    console.log(input.join('\n'))
    function sorted(current,next){
  if(current.length===next.length){
      return current.localeCompare(next)
  }return current.length-next.length
    }
}solve(['alpha',

'beta','gamma'])