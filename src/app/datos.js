const datos = [
    {
       mesa: 1,
       nombre: ['Daniel', 'Laura', 'Lola', 'Lupe'] 
    },
    {
        mesa: 2,
        nombre: ['Juan', 'Mariela', 'Valentina', 'Maximo']
    }
];

// Función para buscar un nombre y obtener la mesa correspondiente
const buscarNombre = (nombre) => {
    // Realizar la búsqueda en los datos
    const resultado = datos.find(mesa => mesa.nombre.includes(nombre));
    
    // Devolver el número de la mesa si se encontró, de lo contrario, devolver null
    return resultado ? resultado.mesa : null;
};

// Ejemplo de uso
const nombreBuscado = 'Laura';
const numeroMesa = buscarNombre(nombreBuscado);

if (numeroMesa !== null) {
    console.log(`El nombre '${nombreBuscado}' se encuentra en la mesa número ${numeroMesa}.`);
} else {
    console.log(`El nombre '${nombreBuscado}' no se encontró en ninguna mesa.`);
}
