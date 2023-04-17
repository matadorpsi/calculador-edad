function calcularEdad(fechaNacimiento) {
      // Obtenemos la fecha actual
  var fechaActual = new Date();
  // Obtenemos el año actual
  var añoActual = fechaActual.getFullYear();
  // Obtenemos el mes actual
  var mesActual = fechaActual.getMonth() + 1;
  // Obtenemos el día actual
  var diaActual = fechaActual.getDate();
// Obtenemos el año de nacimiento
  var añoNacimiento = fechaNacimiento.getFullYear();
  // Obtenemos el mes de nacimiento
  var mesNacimiento = fechaNacimiento.getMonth() + 1;
  // Obtenemos el día de nacimiento
  var diaNacimiento = fechaNacimiento.getDate();

  // Calculamos la edad restando el año actual menos el año de nacimiento
  var edad = añoActual - añoNacimiento;

// Si el mes actual es menor al mes de nacimiento, o si son iguales pero el día actual es menor que el día de nacimiento,
  // significa que la persona todavía no ha cumplido años, por lo que restamos uno a la edad
  if (mesActual < mesNacimiento || (mesActual == mesNacimiento && diaActual < diaNacimiento)) {
    edad--;
  }

  // Devolvemos la edad calculada
  return edad;
}

// Pedimos al usuario que ingrese su fecha de nacimiento
var fechaNacimiento = prompt("Ingresa tu fecha de nacimiento (en formato DD/MM/AAAA):");

 

// Convertimos la fecha de nacimiento en un objeto Date
var partesFecha = fechaNacimiento.split("/");
var fechaNacimientoObj = new Date(partesFecha[2], partesFecha[1] - 1, partesFecha[0]);

 

// Calculamos la edad usando la función que definimos anteriormente
var edad = calcularEdad(fechaNacimientoObj);

 

// Mostramos la edad en la pantalla
alert("Tu edad es " + edad + " años.");
