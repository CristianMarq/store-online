import { Producto } from "./Producto.class";

export class ProductosList {
  _productos;

  constructor() {
    // this._productos = [];
    this.cargarProductoLocalStorage();
  }

  nuevoProducto(producto) {
    this._productos.push(producto);
    this.guardandoProductosLocalStorage();
  }

  eliminarTodo(id) {
    this._productos = this._productos.filter((todo) => todo._id != id);
    this.guardandoProductosLocalStorage();
  }

  marcarCompletado(id) {
    for (const producto of this._productos) {
      if (producto._id == id) {
        producto._agotado = !producto._agotado;
        this.guardandoProductosLocalStorage();
        break;
      }
    }
  }

  guardandoProductosLocalStorage() {
    localStorage.setItem("producto", JSON.stringify(this._productos));
  }

  cargarProductoLocalStorage() {
    this._productos = localStorage.getItem("producto")
      ? JSON.parse(localStorage.getItem("producto"))
      : [];

    this._productos = this._productos.map((element) =>
      Producto.fromJson(element)
    );
  }
}
