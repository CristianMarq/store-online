import "./styles.css";
import { Producto, ProductosList } from "../src/classes/index";
import { crearProductoHtml } from "./js/componentes";

// const producto = new Producto("Paracetamol", "Caja C/10 Tabletas", 25);
// const producto2 = new Producto("Ivermectina", "Caja C/4 Tabletas", 85);
export const productList = new ProductosList();
// productList.nuevoProducto(producto);
// productList.nuevoProducto(producto2);
console.log(productList);
productList._productos.forEach((element) => crearProductoHtml(element));


