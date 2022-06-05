function solve() {
   Array.from(document.querySelectorAll('.add-product')).forEach(i=>{
      i.addEventListener('click',addItem)
     })
     let totalPrice=0
     let result=[]
     function addItem(event){
        let product=event.target.parentElement.parentElement
        let currentName=product.querySelector('.product-title').textContent
        let price=product.querySelector('.product-line-price').textContent
      totalPrice+=Number(price)
        if(!result.includes(currentName)){
           result.push(currentName)
        }
        document.querySelector('textarea').textContent+=`Added ${currentName} for ${price} to the cart.`+'\n'
      }
      let checkOutBtn=document.querySelector('.checkout')
      checkOutBtn.addEventListener('click',checkOut)

      function checkOut(event){
         document.querySelector('textarea').textContent+=`You bought ${result.join(', ')} for ${totalPrice.toFixed(2)}.`
         Array.from(document.querySelectorAll('.add-product')).forEach(i=>{
            i.removeEventListener('click',addItem)
            checkOutBtn.removeEventListener('click',checkOut)
           })
      }
}