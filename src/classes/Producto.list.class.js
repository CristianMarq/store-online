export class ProductosList {
  _productos;

  constructor() {
    this._productos = [];
  }

  nuevoProducto(producto) {
    this._productos.push(producto);
  }

  eliminarTodo() {}

  marcarCompletado(id) {
    for (const producto of this._productos) {
      if (producto._id == id) {
        producto._agotado = !producto._agotado;
        break;
      }
    }
  }
}
