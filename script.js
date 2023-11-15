//ejercicio 1
function ejercicio1() {
    const meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
  
    document.write("<h2> Lista de meses</h2>");
    document.write("<ul>");
  
    for (let listameses = 0; listameses < meses.length; listameses++) {
      document.write(`<li>${meses[listameses]}</li>`);
    }
  
    document.write("</ul>");
  }
  
  // Llamada a la función para ejecutar el código
  ejercicio1();
 //ejercicio  

 function ejercicio2 (){
  
  // Solicitar al usuario el nombre de ciudades mediante un prompt
  var ciudades = [];
  var ciudad;

  do {
      ciudad = prompt("Ingrese el nombre de una ciudad (o presione Cancelar para finalizar):");

      if (ciudad !== null) {
          ciudades.push(ciudad);
      }

  } while (ciudad !== null);

  // Añadir en última posición la ciudad de París_
  ciudades.push("París_");

  // Mostrar el arreglo de ciudades ingresadas como una lista en el documento web
  document.write("<h2>Arreglo de ciudades ingresadas:</h2>");
  document.write("<ul>");

  for (var i = 0; i < ciudades.length; i++) {
      document.write("<li>" + ciudades[i] + "</li>");
  }

  document.write("</ul>");

  // Mostrar la longitud del arreglo
  document.write("<p>Longitud del arreglo: " + ciudades.length + "</p>");

  // Mostrar en el documento web los ítems de las posiciones primera, tercera y última
  document.write("<h2>Ítems de las posiciones primera, tercera y última:</h2>");
  document.write("<p>Primera posición: " + ciudades[0] + "</p>");
  
  if (ciudades.length >= 3) {
      document.write("<p>Tercera posición: " + ciudades[2] + "</p>");
  } else {
      document.write("<p>No hay suficientes ciudades para mostrar en la tercera posición.</p>");
  }

  if (ciudades.length > 0) {
      document.write("<p>Última posición: " + ciudades[ciudades.length - 1] + "</p>");
  } else {
      document.write("<p>No hay ciudades ingresadas.</p>");
  }

  // Escribir por pantalla el elemento que ocupa la segunda posición
  if (ciudades.length > 1) {
      document.write("<h2>Elemento en la segunda posición:</h2>");
      document.write("<p>" + ciudades[1] + "</p>");
  } else {
      document.write("<p>No hay suficientes ciudades para mostrar en la segunda posición.</p>");
  }

  // Sustituir el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'
  if (ciudades.length > 1) {
      ciudades[1] = "Barcelona";
      console.log("Arreglo después de sustituir Barcelona:", ciudades);
  } else {
      console.log("No hay suficientes ciudades para sustituir Barcelona.");
  }
 }
//ejercicio3
function ejercicio3() {
    // Función para simular el lanzamiento de un dado
    function lanzarDado() {
        return Math.floor(Math.random() * 6) + 1; // Números entre 1 y 6
    }

    // Inicializar un array para contar las sumas
    const conteoSumas = new Array(11).fill(0); // Índices 2 a 12 representan las sumas posibles

    // Simular 50 lanzamientos de dos dados
    for (let i = 0; i < 50; i++) {
        let dado1 = lanzarDado();
        let dado2 = lanzarDado();
        let suma = dado1 + dado2;

        // Incrementar el contador para la suma obtenida
        conteoSumas[suma - 2]++;
    }

    // Mostrar los resultados
    console.log("Resultado de lanzar dos dados 50 veces:");
    for (let j = 2; j <= 12; j++) {
        console.log("Suma " + j + ": " + conteoSumas[j - 2] + " veces");
    }
}

// Llamar a la función ejercicio3 para ejecutar el código
ejercicio3();
 
//ejercicio4 
function ejercicio4() {
    function determinarParidad(numero) {
        return numero % 2 === 0 ? "El número es par." : "El número es impar.";
    }

    // Ejemplo de uso de la función
    const numeroEjemplo = 7; // Puedes cambiar este número
    const resultado = determinarParidad(numeroEjemplo);

    // Mostrar el resultado por pantalla
    console.log(resultado);
}

// Llamar a la función ejercicio4 para ejecutar el código
ejercicio4();

