export class Producto {
  _id;
  _nombre;
  _descripcion;
  _precio;
  _agotado;
  _creado;

  static fromJson({ _id, _nombre, _descripcion, _precio, _agotado, _creado }) {
    const temProd = new Producto(_nombre, _descripcion, _precio);
    temProd.id = _id;
    temProd._agotado = _agotado;
    temProd.creado = _creado;
    return temProd;
  }

  constructor(nombre, descripcion, precio) {
    this._id = new Date().getTime();
    this._nombre = nombre;
    this._descripcion = descripcion;
    this._precio = precio;
    this._agotado = false;
    this._creado = new Date();
  }

  imprimeProd() {
    console.log(`Nombre del producto: ${this._nombre}`);
  }
}
