<?php

// Función para obtener y mostrar la información de una persona por su ID
function obtenerPersonaPorID($personas) {
    // Mostrar el tamaño del objeto (cantidad de personas)
    echo "Tamaño del objeto: " . count($personas) . PHP_EOL;

    // Solicitar ID al usuario
    $idUsuario = readline("Introduce el ID de la persona que deseas buscar: ");

    // Convertir la entrada del usuario a un número
    $idNumero = (int) $idUsuario;

    // Filtrar la persona correspondiente al ID
    $persona = null;
    foreach ($personas as $p) {
        if ($p['id'] === $idNumero) {
            $persona = $p;
            break;
        }
    }

    if ($persona) {
        // Mostrar la información de la persona
        echo "Información de la persona con ID $idNumero:\n";
        echo "Nombre: " . $persona['nombre'] . " " . $persona['apellidos'] . "\n";
        echo "Edad: " . $persona['edad'] . "\n";
        echo "Ciudad de origen: " . $persona['ciudad_origen'] . "\n";
    } else {
        // Mensaje si no se encuentra la persona
        echo "No se encontró una persona con ID $idNumero.\n";
    }
}

// Leer el archivo JSON
function leerArchivoJson($archivo) {
    if (!file_exists($archivo)) {
        echo "El archivo $archivo no se encuentra.\n";
        return null;
    }

    $contenido = file_get_contents($archivo);

    // Decodificar el contenido JSON
    $personas = json_decode($contenido, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        echo "Error al leer el archivo JSON, el formato no es válido.\n";
        return null;
    }

    return $personas;
}

// Llamada principal
$personas = leerArchivoJson('personas.json');
if ($personas !== null) {
    obtenerPersonaPorID($personas);
}
?>

<!--  php personGet.php -->