export const homeQuantityToggle = (e, id, stock)=>{
    const currentCardElement =  document.querySelector(`#card${id}`);
    console.log(currentCardElement);

    const  productQuantity = currentCardElement.querySelector(".productQuantity");
    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;
    console.log(productQuantity);
    console.log(typeof(productQuantity));
    if(e.target.className === "cartIncrement"){
        if(quantity<stock){
            quantity +=1;
        }
        else{
            quantity = stock
        }
        console.log(`hello ${quantity}`);       
    }
    if(e.target.className === "cartDecrement"){
        if(quantity>1){
            quantity -=1;
        }
        else{
            quantity = 1;
        }
        console.log(`hello ${quantity}`);       
    }
    productQuantity.innerText = quantity;
    productQuantity.setAttribute("data-quantity",quantity);
};