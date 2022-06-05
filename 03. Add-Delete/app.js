
    function addItem() {
        let list=document.getElementById('items')
        let li=document.createElement('li')
        let input=document.getElementById('newItemText').value
        li.textContent=input
    
    let deleteBtn=document.createElement('a')
    deleteBtn.textContent='[Delete]'
    deleteBtn.href='#'
    li.appendChild(deleteBtn)
    deleteBtn.addEventListener('click',onDelete)
        list.appendChild(li)
       document.getElementById('newItemText').value=''
       function onDelete(event){
   event.target.parentElement.remove()
       }
    }