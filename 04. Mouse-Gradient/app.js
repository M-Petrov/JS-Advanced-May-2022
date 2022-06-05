function attachGradientEvents() {
    let box=document.getElementById('gradient')
box.addEventListener('mousemove',hover)

function hover(ev){
document.getElementById('result').textContent=(Math.floor(ev.offsetX/box.clientWidth*100))+'%'
}

}