import { eliminarProductos } from "./accionesCarrito.js";
import { obtenerCarritoStorage } from "./localStorage.js";

const modalContenedor = document.querySelector('.modal-contenedor');
const abreCarrito = document.getElementById('cesta-carrito');
const cierraCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito');
const botonesNav = document.querySelector('.nav-item');

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

//llamamos a la funcion eliminar productos cuando el usuario acepta eliminar a traves del sweetalert.
    if(e.target.classList.contains('boton-eliminar')) {
        Swal.fire({
            title: 'Desea eliminar el producto?',
            text: "Si elimina el producto no podra volver atras",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(177, 5, 211)',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar producto'
            }).then((result) => {
            if (result.isConfirmed) {
                eliminarProductos(e.target.value)
                Swal.fire(
                'Eliminado!',
                'El producto fue eliminado del carrito.',
                'success'
            )
        }
    })
    };
});

botonesNav.addEventListener('click',()=>{
    Toastify({
        text: "Proximamente...",
        duration: 3000
        }).showToast();
})

//escuchamos el boton comprar y validamos que no este vacio para avanzar.
const comprar = document.getElementById('hacerPedido');
comprar.addEventListener('click', () =>{
    const carrito = obtenerCarritoStorage();
    carrito.length === 0 ? Swal.fire({
        title: 'No hay ningun producto en el carrito!',
        icon: 'warning',
    })
    :location.href='pedido.html'
})