export class Producto {
  _id;
  _nombre;
  _descripcion;
  _precio;
  _disponible;
  _creado;

  constructor(nombre, descripcion, precio) {
    this._id = new Date().getTime();
    this._nombre = nombre;
    this._descripcion = descripcion;
    this._precio = precio;
    this._disponible = false;
    this._creado = new Date();
  }
}

