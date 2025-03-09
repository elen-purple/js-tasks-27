import productsList from "./templates/products.hbs";
import { productsData } from "./js/data.js";

const section = document.querySelector("#products")
const productsLayout = productsList({productsData})
section.innerHTML = productsLayout;