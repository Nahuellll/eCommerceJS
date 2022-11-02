import { borrarStorage, obtenerCarritoStorage } from "./localStorage.js";


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
    const carrito = obtenerCarritoStorage();
    pintarPedido(carrito);
    pintarTotalPedido(carrito);
    console.log (carrito);
}
})

//pintamos el pedido realizado.
const pintarPedido = (carrito) => {
    const divContenedor = document.getElementById('checkout-carrito');

    divContenedor.innerHTML = '';

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
                        `
        divContenedor.appendChild(div);
    })
}

//pintamos el total del pedido.
const pintarTotalPedido = (carrito) => {
    const contenedorTotal = document.getElementById('checkout-total');

    let total = 0;

    carrito.forEach(producto => {
        total = total + producto.precio * producto.cantidad;
    })

    contenedorTotal.innerHTML = `<h2>Total:$ ${total} </h2>`
}


//escuchamos el boton de terminar compra, vaciamos el localStorage y nos direccionamos a la pagina final.
// const terminarCompra = document.getElementById('checkout');

// terminarCompra.addEventListener('click', (e) => {
//     e.stopPropagation();
//     finalizarCompra();
// })

const finalizarCompra = () => {
    location.href = './finalCompra.html'
}



const btn = document.getElementById('checkout')
btn.addEventListener('click', () => {
    borrarStorage();
    finalizarCompra();
})

