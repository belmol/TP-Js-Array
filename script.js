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

 