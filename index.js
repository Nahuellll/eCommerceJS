import { mostrarProductos } from "./App.js";
import { pintarCarrito } from "./src/accionesCarrito.js";
import { actualizarTotalesCarrito } from "./src/actualizarCarrito.js";
import { obtenerCarritoStorage } from "./src/localStorage.js";

//usamos el evento DOMContentLoaded para escuchar la primera carga de la pagina.
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();

//condicional que busca algun valor en el carrito,si hay lo retorna  para luego pintar y actualizar el carrito.
    if(localStorage.getItem('carrito')) {
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito);
        actualizarTotalesCarrito(carrito);
    } ;
});

// const comprar = document.getElementById('hacerPedido');
// comprar.addEventListener('click', () =>{
//     let carrito = obtenerCarritoStorage();
//     if (carrito.length===0){
//         console.log(carrito)
//     } else {
//         location.href='pedido.html'
//     }
// })