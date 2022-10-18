const obtenerProductos = async () => {
    try {
        const response = await fetch('./src/data/stockProductos.json');
        const data = await response.json();

        return data;
    } catch (err) {
        console.log('Error en:',err);
    };

};

export { obtenerProductos }