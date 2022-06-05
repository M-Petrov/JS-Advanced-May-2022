function validate() {

let input=document.querySelector('#email')
input.addEventListener('change',validate)


function validate(event){
    let value=event.target.value
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))){
       input.classList.add('error')
    }
        else{
            input.classList.remove('error')
        }
    
}
}