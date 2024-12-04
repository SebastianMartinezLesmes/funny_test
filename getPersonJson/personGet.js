const fs = require('fs');
const readline = require('readline');

// Crear una interfaz para la lectura de la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obtenerPersonaPorID(personas) {

    console.log("tamaño del objeto: "+personas.length)
    rl.question("Introduce el ID de la persona que deseas buscar: ", (id) => {
        // Convertir la entrada del usuario a un número
        const idNumero = parseInt(id);

        // Filtrar la persona por ID
        const persona = personas.find(p => p.id === idNumero);

        if (persona) {
            console.log(persona) // Mostrar la información de la persona
        } else {
            console.log(`No se encontró una persona con ID ${idNumero}.`); // Mensaje No se encuentra la persona
        }

        // Cerrar la interfaz de lectura
        rl.close();
    });
}

fs.readFile('./personas.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error leyendo el archivo:', err);
        return;
    }

    try {
        const personas = JSON.parse(data);
        obtenerPersonaPorID(personas);
    } catch (error) {
        console.error('El archivo JSON no es válido:', error);
    }
});

// CMD: node  personGet.js