import { Producto, ProductosList } from "../src/classes/index";
import "./styles.css";

const producto = new Producto("Paracetamol", "Caja C/10 Tabletas", 25);
const productList = new ProductosList();
productList.nuevoProducto(producto);
console.log(productList);
