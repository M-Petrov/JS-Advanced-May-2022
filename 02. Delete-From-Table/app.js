function deleteByEmail() {
    let textToDelete=document.querySelector('input[name="email"]').value
    let rows=Array.from(document.querySelectorAll('tbody tr'))
    let result=false;
 for (let row of rows) {
     let email=row.children[1].textContent
 
     if(email==textToDelete){
    row.remove()
     result=true
    }

}
document.getElementById('result').textContent=result ? 'Deleted.': 'Not found.'

     
}