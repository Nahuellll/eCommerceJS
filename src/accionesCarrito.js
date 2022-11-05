import { actualizarTotalesCarrito } from './actualizarCarrito.js';
import { obtenerCarritoStorage } from './localStorage.js';
import { obtenerProductos } from './obtenerProductos.js';


let carrito = [];

//con el metodo find buscamos validar si es que tenemos un producto repetido
const validarProductoRepetido = (productoId) => {


    if (localStorage.getItem('carrito')){
        carrito = obtenerCarritoStorage();
    }

//con el metodo find buscamos la coincidencia de algun producto
    const productoRepetido = carrito.find(producto => producto.id === productoId);

//si el producto esta repetido sumamos en cantidad y luego la modificamos en el DOM.
    if(productoRepetido) {
        productoRepetido.cantidad+=1;
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`);
        cantidadProducto.innerText = `cantidad: ${productoRepetido.cantidad}`;
        actualizarTotalesCarrito(carrito);
    } else{
        agregarAlCarrito(productoId);
    }
};

// obtenemos los datos y mediante find obtenemos el producto que sumaremos al carrito con un push.
const agregarAlCarrito = async (productoId) => {
    const contenedor = document.getElementById('carrito-contenedor');
    const productos = await obtenerProductos();
    const producto = productos.find(producto => producto.id === productoId);
    carrito.push(producto);

    const div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${producto.nombre}</p>
                    <p>Precio: ${producto.precio}</p>
                    <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
                    <button id=eliminar${producto.id} value='${producto.id}' class='btn waves-effect waves-ligth boton-eliminar'>X</button>
                    `;
    contenedor.appendChild(div);
    actualizarTotalesCarrito(carrito);
};

// pintarCarrito recibe por parámetro un array de objetos del storage,que recorremos para luego pintarlo.
const pintarCarrito = (carrito) => {
    const contenedor = document.getElementById('carrito-contenedor');

    contenedor.innerHTML = '';

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
                        <button id=eliminar${producto.id} value='${producto.id}' class='btn waves-effect waves-ligth boton-eliminar'>X</button>
                        `;
        contenedor.appendChild(div);
    });
};

//obtenemos el carrito del storage y filtramos en un nuevo array todos los productos diferentes al que el usuario elimine.
const eliminarProductos = (productoId) => {
    const carritoStorage = obtenerCarritoStorage();
    const carritoActualizado = carritoStorage.filter(producto => producto.id != productoId);

    actualizarTotalesCarrito(carritoActualizado);
    pintarCarrito(carritoActualizado);
};
export { agregarAlCarrito, validarProductoRepetido, pintarCarrito, eliminarProductos };