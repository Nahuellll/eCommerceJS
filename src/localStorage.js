//funcion para guardar un array de objetos y  convertirlo a json para almacenarlo en el local storage.
const guardarCarritoStorage = (carritoDeCompras) => {
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
};

//funcion que obtiene los json del storage, los parsea para retornar como objeto nuevamente.
const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    return carritoStorage;
};

export { guardarCarritoStorage, obtenerCarritoStorage };
