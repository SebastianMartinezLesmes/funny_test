// Obtener referencias a los elementos del DOM
const nombreInput = document.getElementById('nombre');
const altoInput = document.getElementById('alto');
const anchoInput = document.getElementById('ancho');
const colorInput = document.getElementById('color');
const aplicarButton = document.getElementById('aplicar');
const bordeSelect = document.getElementById('borde');
const animacionSelect = document.getElementById('animacion');
const formaSelect = document.getElementById('forma');

function obtenerColorContrario(color) {
    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);

    const luminosidad = (0.2126 * r + 0.7152 * g + 0.0722 * b);

    return luminosidad < 128 ? '#ffffff' : '#000000';
}


// Función para aplicar los valores ingresados al div 'elemento'
function aplicarValores() {
    const nombre = nombreInput.value;
    const alto = altoInput.value + 'cm';
    const ancho = anchoInput.value + 'cm';
    const color = colorInput.value;
    const borde = bordeSelect.value;
    const animacion = animacionSelect.value;
    const colorContrario = obtenerColorContrario(color);

    const elementoDiv = document.getElementById('elemento');
    const nombreMensajeDiv = document.getElementById('nombreMensaje');
    
    if (elementoDiv) {
        elementoDiv.classList.remove('cuadrado', 'triangulo', 'circulo', 'rombo');
        elementoDiv.classList.add(formaSelect.value);
        nombreMensajeDiv.style.color = colorContrario;
        x = formaSelect.value
        console.log(x);

        nombreMensajeDiv.innerText = `Propiedad de: ${nombre}`;
        elementoDiv.style.animation = '';
        if (borde == 'si' && x != 'circulo') {
            elementoDiv.style.borderRadius = '5%';
        } else if (borde == 'no' && x != 'circulo'){
            elementoDiv.style.borderRadius = '0';
        } else if (x == 'circulo') {
            elementoDiv.style.borderRadius = '50%';
        }
        // ESTO ES EL TRIANGULO DESPUES DE PROBAR TOCA ANIDARLO
        if (x == 'triangulo') {
            test = alto +' solid ' + color;
            elementoDiv.style.borderBottom = alto +' solid ' + color;
            elementoDiv.style.borderRight = ancho + ' solid transparent';
            elementoDiv.style.borderTop = 'solid transparent';
            elementoDiv.style.borderLeft = ancho + ' solid transparent';
            elementoDiv.style.backgroundColor = '#ffffff00';
            elementoDiv.style.width = 0;
            elementoDiv.style.height = 0;
            if (borde == 'si'){
                elementoDiv.style.borderBottomRightRadius = ancho;
                elementoDiv.style.borderBottomLeftRadius = ancho;
            }
        } else {
            elementoDiv.style.width = ancho;
            elementoDiv.style.height = alto;
            elementoDiv.style.backgroundColor = color;
            elementoDiv.style.color = color;
            elementoDiv.style.borderBottom = '0';
            elementoDiv.style.borderRight = '0';
            elementoDiv.style.borderTop = '0';
            elementoDiv.style.borderLeft = '0';
        }
        switch (animacion) {
            case 'girar':
                elementoDiv.style.animation = 'girar 10s ease-in-out ';
                nombreMensajeDiv.style.animation = 'girar 9s ease-in-out ';
                break;
            case 'aparecer':
                elementoDiv.style.animation = 'aparecer 5s ease-in-out ';
                nombreMensajeDiv.style.animation = 'aparecer 5s ease-in-out ';
                break;
            default:
                elementoDiv.style.animation = '';
                break;
        }
    }
}

// Agregar un event listener al botón 'aplicar'
if (aplicarButton) {
    aplicarButton.addEventListener('click', aplicarValores);
}
