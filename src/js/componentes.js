import { productList } from "../index";
import { Producto } from "../classes";

// Referencias al dom
const divProductos = document.querySelector("#list-products");
const formProduct = document.querySelector("#form-product");
const buttonAgregar = document.querySelector("#agregar");
const listFiltros = document.querySelector("#filters");
const ancFiltros = document.querySelectorAll(".filtro");

const stringToHtml = (string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(string, "text/html");
  return doc.body.firstChild;
};

export const crearProductoHtml = (producto) => {
  const elementHtml = stringToHtml(`
  <li class="${producto._agotado ? "completed" : ""}" data-id="${producto._id}">
    <div id="view">
      <input class="toggle" type="checkbox" ${
        producto._agotado ? "checked" : ""
      } />
      <label>${producto._nombre}</label>
      <label>${producto._descripcion}</label>
      <button id="destroy">x</button>
      <br />
      <label id="price">$${producto._precio}</label>
    </div>
  </li>`);

  divProductos.append(elementHtml);

  return elementHtml;
};

const cargaForm = () => {
  formProduct.onsubmit = (event) => {
    event.preventDefault();
    const nombre = document.querySelector("#name").value;
    const descripcion = document.querySelector("#descripcion").value;
    const precio = document.querySelector("#precio").value;

    const producto = new Producto(nombre, descripcion, precio);
    productList.nuevoProducto(producto);
    crearProductoHtml(producto);
  };
};

buttonAgregar.addEventListener("click", () => {
  cargaForm();
});

divProductos.addEventListener("click", (event) => {
  const nombreElemento = event.target.localName;
  const productoElemento = event.target.parentElement.parentElement;
  const todoId = productoElemento.getAttribute("data-id");

  if (nombreElemento.includes("input")) {
    productList.marcarCompletado(todoId);
    productoElemento.classList.toggle("completed");
  } else if (nombreElemento.includes("button")) {
    productList.eliminarTodo(todoId);
    divProductos.removeChild(productoElemento);
  }
});

listFiltros.addEventListener("click", (event) => {
  const nombreFiltro = event.target.text;

  if (!nombreFiltro) {
    return;
  }

  for (const producto of divProductos.children) {
    producto.classList.remove("hidden");
    const completado = producto.classList.contains("completed");

    ancFiltros.forEach((element) => element.classList.remove("selected"));
    event.target.classList.add("selected");

    switch (nombreFiltro) {
      case "Agotados":
        if (!completado) {
          producto.classList.add("hidden");
        }
        break;
      case "Disponibles":
        if (completado) {
          producto.classList.add("hidden");
        }
        break;
    }
  }
});
