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
}