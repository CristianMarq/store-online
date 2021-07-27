// Referencias al dom
const divProductos = document.querySelector("#list-products");

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
