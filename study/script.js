function copiarCodigo(idEditor) {
  const codigo = document.getElementById(idEditor).value;
  navigator.clipboard.writeText(codigo).then(() => {
    alert("¡Código copiado al portapapeles!");
  }).catch(err => {
    alert("Error al copiar: " + err);
  });
}

function ejecutarCodigo(idEditor, idResultado) {
  const codigo = document.getElementById(idEditor).value;
  const consola = [];

  const originalConsoleLog = console.log;
  console.log = function (...args) {
    consola.push(args.join(' '));
    originalConsoleLog.apply(console, args);
  };

  try {
    eval(codigo);
    document.getElementById(idResultado).innerText = consola.join('\n') || "Código ejecutado sin salida.";
  } catch (e) {
    document.getElementById(idResultado).innerText = "Error: " + e.message;
  }

  console.log = originalConsoleLog;
}

function mostrarVentana(lenguaje) {
  const ventanas = ['html', 'css', 'js'];
  ventanas.forEach(id => {
    const div = document.getElementById(`ventana-${id}`);
    div.style.display = (id === lenguaje) ? 'block' : 'none';
  });
}
