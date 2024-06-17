import { getCartProductFromLS } from "./getCartProducts"

export const updateBill = () => {

    let subTotalBill = document.querySelector(".productSubTotal");
    let finalTotalBill = document.querySelector(".productFinalTotal");
   let LSData = getCartProductFromLS();
   let initialvalue = 0;
   if(LSData){
       let SubTotal = LSData.reduce((accumulator,elem)=>{    
           console.log(initialvalue);
           console.log("accum",accumulator);
           let value = parseInt(elem.price) || 0;
           return accumulator+value;
       },initialvalue);
       console.log(SubTotal);
       subTotalBill.innerHTML = `₹${SubTotal}`;
       finalTotalBill.innerHTML = `₹${SubTotal + 50}`;
   }
   else{
    subTotalBill.textContent = `₹${0}`;
    finalTotalBill.textContent = `₹${0}`;
   }
}