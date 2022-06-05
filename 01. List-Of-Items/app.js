function addItem() {
    let list=document.getElementById('items')
    let li=document.createElement('li')
    let input=document.getElementById('newItemText').value

let deleteBtn=document.createElement('e')
deleteBtn.textContent='[Delete]'
deleteBtn.href='#'
li.appendChild(deleteBtn)

    li.textContent=input
    list.appendChild(li)
   document.getElementById('newItemText').value=''
}