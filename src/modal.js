import { eliminarProductos } from "./accionesCarrito.js";

const modalContenedor = document.querySelector('.modal-contenedor');
const abreCarrito = document.getElementById('cesta-carrito');
const cierraCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito');

abreCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cierraCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cierraCarrito.click()
});

//stopPropagation evita una mayor propagacion del evento escuchado.
modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation();

//llamamos a la funcion eliminar productos solo cuando se escucha el evento click en el boton eliminar.
    if(e.target.classList.contains('boton-eliminar')) {
        eliminarProductos(e.target.value)
    };
});