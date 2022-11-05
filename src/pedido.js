import { borrarStorage, obtenerCarritoStorage } from "./localStorage.js";

const validarFormulario = document.getElementById('checkout-form');
const validarNombre = document.getElementById('firstName');
const validarApellido = document.getElementById('lastName');
const validarEmail = document.getElementById('email');
const btnTerminar = document.getElementById('checkout')

//al cargar la pagina si es que hay algo en el localstorage lo pintamos en el dom.
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
    const carrito = obtenerCarritoStorage();
    pintarPedido(carrito);
    pintarTotalPedido(carrito);
}

//detenemos la propagacion del evento submit
    if(validarFormulario){
        validarFormulario.addEventListener('submit', (e) => {

            e.stopPropagation();

        })
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

//funcion  que nos direcciona a la pagina final de nuestra compra y borra el storage.
const finalizarCompra = () => {
    borrarStorage();
    location.href = './finalCompra.html'
}


//accedemos al boton finalizar para avanzar .
btnTerminar.addEventListener('click', () => {
    Toastify({
        text: "Enviando datos.",
        duration: 3000,
        position: "center",
        style: {
            background: "linear-gradient(308deg, rgb(241, 3, 75) 0%, rgb(128, 128, 128) 50%)",
        },
    }).showToast();

    if(validarDatos() === false){
        return;
    }else( setTimeout(() => {
        finalizarCompra()
    }, 3000) )
})

//funcion donde validamos los campos con el metodo length.
const validarDatos = () => {

    if(validarNombre.value.length === 0){
        Toastify({
            text: "No has escrito un nombre.",
            duration: 3000,
            position: "center",
            style: {
                background: "linear-gradient(308deg, rgb(241, 3, 75) 0%, rgb(128, 128, 128) 50%)",
            },
        }).showToast();

        return false;

    }else if (validarApellido.value.length === 0){
        Toastify({
            text: "No has escrito un apellido.",
            duration: 3000,
            position: "center",
            style: {
                background: "linear-gradient(308deg, rgb(241, 3, 75) 0%, rgb(128, 128, 128) 50%)",
            },
        }).showToast();

        return false;

    } else if (validarEmail.value.length === 0){
        Toastify({
            text: "No has escrito un email.",
            duration: 3000,
            position: "center",
            style: {
                background: "linear-gradient(308deg, rgb(241, 3, 75) 0%, rgb(128, 128, 128) 50%)",
            },
        }).showToast();

        return false;

        } else {
            return true;
        }

}


