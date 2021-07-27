export class Producto {
  _id;
  _nombre;
  _descripcion;
  _precio;
  _agotado;
  _creado;

  constructor(nombre, descripcion, precio) {
    this._id = new Date().getTime();
    this._nombre = nombre;
    this._descripcion = descripcion;
    this._precio = precio;
    this._agotado = true;
    this._creado = new Date();
  }
}
