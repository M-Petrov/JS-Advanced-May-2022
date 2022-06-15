
function solve() {
let mailsList=document.getElementById('list')
let addToListBtn=document.getElementById('add')
let listActions=document.createElement('div')
let sendBtn=document.createElement('button')
let deleteBtn=document.createElement('button')
sendBtn.textContent='Send'
deleteBtn.textContent='Delete'
listActions.appendChild(sendBtn)
listActions.appendChild(deleteBtn)
addToListBtn.addEventListener('click',addToList)
let resetBtn=document.getElementById('reset')
resetBtn.addEventListener('click',reset)
let recepientInp=document.getElementById('recipientName')
let titleInp=document.getElementById('title')
let textInp=document.getElementById('message')

function reset(e){
    e.preventDefault()
recepientInp.value=''
titleInp.value=''
textInp.value=''
}

function addToList(e){
e.preventDefault()
let textToSend=document.createElement('li')
let title=document.createElement('h4')
let recepient=document.createElement('h4')
let text=document.createElement('span')
let sendBtn=document.createElement('button')
let div=document.createElement('div')
let deleteBtn=document.createElement('button')
deleteBtn.addEventListener('click',delete1)
function delete1(e){
    let deletedList=document.querySelector('.delete-list')
    
    let li=document.createElement('li')
    let span1=document.createElement('span')
    let spand2=document.createElement('span')
    let hs=e.target.parentElement.parentElement.querySelectorAll('h4')
    let recep='To: '+hs[1].textContent.slice(16)
    let title='Title: '+hs[0].textContent.slice(6)
    span1.textContent=recep
    spand2.textContent=title
    li.appendChild(span1)
    li.appendChild(spand2)
    e.target.parentElement.parentElement.remove()
    deletedList.appendChild(li)
    
}
deleteBtn.type='submit'
sendBtn.type='submit'
deleteBtn.id='delete'
sendBtn.id='send'
deleteBtn.textContent='Delete'
sendBtn.textContent='Send'
title.textContent='Title: '+titleInp.value
recepient.textContent='Recipient Name: '+recepientInp.value
text.textContent=textInp.value


    
    textToSend.appendChild(title)
textToSend.appendChild(recepient)
textToSend.appendChild(text)
div.appendChild(sendBtn)
div.appendChild(deleteBtn)
textToSend.appendChild(div)
mailsList.appendChild(textToSend)

sendBtn.addEventListener('click',send)
function send(e){
    e.preventDefault()
    let li=document.createElement('li')
    let span1=document.createElement('span')
    let spand2=document.createElement('span')
    let div=document.createElement('div')
    let o=String(recepientInp.value).trim
    let b=String(titleInp.value).trim
    let c=String(textInp.value).trim
    if(!o&&!b&&!c){
        return}
    let deleteBtn=document.createElement('button')
    deleteBtn.addEventListener('click',deleteFunc)
    deleteBtn.type='submit'
    deleteBtn.classList.add('delete')
    deleteBtn.textContent='Delete'
    div.appendChild(deleteBtn)
    deleteBtn.addEventListener('click',deleteFunc)
    let hs=e.target.parentElement.parentElement.querySelectorAll('h4')
    let recep='To: '+hs[1].textContent.slice(16)
    let title='Title: '+hs[0].textContent.slice(6)
    span1.textContent=recep
    spand2.textContent=title
    li.appendChild(span1)
    li.appendChild(spand2)
    li.appendChild(div)
    let sent=document.querySelector('.sent-list')
    sent.appendChild(li)
    mailsList.removeChild(e.target.parentElement.parentElement)
    function deleteFunc(e){
        let deletedList=document.querySelector('.delete-list')
    
         deletedList.appendChild(e.target.parentElement.parentElement)
         e.target.remove()
    }
}
}
}

solve()
