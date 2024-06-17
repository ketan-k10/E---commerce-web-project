import products from"./api/products.json"
import { getCartProductFromLS } from "./getCartProducts";
import { updateBill } from "./updateBill";
export const cartQuantityToggle = (e,id,stock)=> {

    let localStorageData = getCartProductFromLS();
    const currentCardElement =  document.querySelector(`#card${id}`);
    // console.log(currentCardElement);
    // console.log("products",products)
    const  productQuantity = currentCardElement.querySelector(".productQuantity");
    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;
    let product = products.find((elem)=>elem.id === id);
    console.log(product.price);
    // console.log(typeof(productQuantity));
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
    let price = product.price;
    console.log(quantity);
    quantity = Number(quantity);
    price = Number(price * quantity).toFixed(2);
    currentCardElement.querySelector(".productPrice").innerText = `₹${price}`
    productQuantity.setAttribute("data-quantity",quantity);
    let ProductInLS = {id, quantity , price};
    let updatedData = localStorageData.map((elem)=>{
        if(elem.id===id) return ProductInLS;
        return elem;
    })
    localStorage.setItem("cartProductLS",JSON.stringify(updatedData));
    updateBill();
};