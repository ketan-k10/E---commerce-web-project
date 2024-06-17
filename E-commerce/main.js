import './style.css'

import products from "./api/products.json";
import { showProductContainer } from './homeProductCards';
import { getCartProductFromLS } from './getCartProducts';

console.log(products);

//calling  the function to display all the cards 
getCartProductFromLS();
showProductContainer(products);