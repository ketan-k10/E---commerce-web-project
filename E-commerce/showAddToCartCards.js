import { getCartProductFromLS } from "./getCartProducts";
import Products from "./api/products.json"
import { removeToCart } from "./removeToCart";
import { cartQuantityToggle } from "./cartQuantityToggle";
import { updateBill } from "./updateBill";
let cartProducts = getCartProductFromLS();

let filterProducts = Products.filter((elem)=>{
        return   cartProducts.some((curelem)=>
               elem.id == curelem.id
           );
})
console.log(filterProducts);

let productCardContainer = document.querySelector("#productCartContainer");
let productCartTemplate = document.querySelector("#productCartTemplate");

filterProducts.forEach((curProd)=>{
    const { id, name, category, brand, price, stock, description, image} = curProd;
    let productLS = cartProducts.filter((elem)=>elem.id == id);
    productLS = productLS[0];
    console.log(productLS);
    let productClone = document.importNode(productCartTemplate.content,true);
    productClone.querySelector(".productQuantity").setAttribute("data-quantity",`${productLS.quantity}`);
    productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);
   
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productPrice").textContent =`₹${productLS.price}`;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productQuantity").textContent = `${productLS.quantity}`;
          
        productClone.querySelector(".stockElement").addEventListener('click',(e)=>{
                 cartQuantityToggle(e,id,stock);
        })

        productClone.querySelector(".remove-to-cart-button").addEventListener('click', (e)=>{
                    removeToCart(e, id, stock);
        })

        productCardContainer.append(productClone);
        updateBill();
});