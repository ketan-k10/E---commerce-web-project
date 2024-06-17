import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";

import { updateCartValue } from "./updateCartValue";

export const addToCart = (e,id,stock)=>{

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProdElement = document.querySelector(`#card${id}`);
    let quantity = currentProdElement.querySelector(".productQuantity").textContent;
    let price =  currentProdElement.querySelector(".productPrice").textContent;
    price = price.replace("₹","");

    let existingProd = arrLocalStorageProduct.find(
        (currprod)=> currprod.id === id);
    console.log(existingProd);
    if(existingProd){
        quantity = Number(existingProd.quantity)+ Number(quantity);
        price = Number(price * quantity).toFixed(2);

        let updatedCart = {id, quantity, price};

        updatedCart = arrLocalStorageProduct.map((curProd)=>{
           return  curProd.id == id ? updatedCart : curProd;
        });

        localStorage.setItem("cartProductLS",JSON.stringify(updatedCart));
        // console.log("cant");
        return false;
    }



    quantity = Number(quantity);
    price = Number(price * quantity).toFixed(2);
    
    // let updtaedCart = {id,quantity, price};
    arrLocalStorageProduct.push({id,quantity, price});
    localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);
    showToast("add",id);
   
}