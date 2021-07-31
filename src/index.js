import "./styles.css";
import { Producto, ProductosList } from "../src/classes/index";
import { crearProductoHtml } from "./js/componentes";

export const productList = new ProductosList();
console.log(productList._productos);
productList._productos.forEach((element) => crearProductoHtml(element));
