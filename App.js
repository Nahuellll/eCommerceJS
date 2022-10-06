import { validarProductoRepetido } from "./src/accionesCarrito.js";

//funcion que recibe un array de productos por parametro para mostrarlos en el DOM.
const mostrarProductos = (productos) => {
  const contenedorProductos = document.getElementById("producto-contenedor");

  //recorremos el array y mostramos uno por uno los productos
  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-image">
                        <img src=${producto.img}>
                        <span class="card-title">${producto.nombre}</span>
                        <a class="btn-floating halfway-fab wabes-effect waves-light red" id=boton${producto.id}><i class="material-icons">add_shopping_cart</i></a>
                      </div>
                      <div class="card-content">
                          <p>${producto.desc}</p>
                          <p>${producto.precio}</p>
                      </div>
                    `
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      validarProductoRepetido(producto.id);
    })
  });
};

export { mostrarProductos };