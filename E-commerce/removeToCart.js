import { getCartProductFromLS } from "./getCartProducts"
import { showToast } from "./showToast";
import { updateBill } from "./updateBill";
import { updateCartValue } from "./updateCartValue";

export const removeToCart = (e,id,stock)=> {
    
    let localStorageData = getCartProductFromLS();
    console.log(localStorageData);
    console.log(typeof(localStorageData));
       
    let updatedLSData = localStorageData.filter((elem)=> elem.id !== id);
    localStorage.setItem("cartProductLS",JSON.stringify(updatedLSData));
    let cardInCart = document.querySelector(`#card${id}`);
    cardInCart.remove();
    console.log(cardInCart);
    updateCartValue(updatedLSData);
    updateBill();
    showToast("delete",id);
};