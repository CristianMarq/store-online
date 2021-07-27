export class ProductosList {
  _productos;

  constructor() {
    this._productos = [];
  }

  nuevoProducto(producto) {
    this._productos.push(producto);
  }
}
