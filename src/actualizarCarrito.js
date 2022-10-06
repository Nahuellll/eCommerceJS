import { guardarCarritoStorage } from "./localStorage.js";

//actualizamos los totales del carrito mediante un metodo reduce para obtener un valor final de cantidad y otro de valor total.
const actualizarTotalesCarrito = (carrito) => {
    const totalCantidad = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    const totalCompra = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);

    pintarTotalesCarrito(totalCantidad, totalCompra);
    guardarCarritoStorage(carrito);
};

//funcion que recibe los totales por parametros para pintarlos en el DOM.
const pintarTotalesCarrito = (totalCantidad, totalCompra) => {
    const contadorCarrito = document.getElementById('contador-carrito');
    const precioTotal = document.getElementById('precioTotal');

    contadorCarrito.innerText = totalCantidad;
    precioTotal.innerText = totalCompra;
};

export { actualizarTotalesCarrito };