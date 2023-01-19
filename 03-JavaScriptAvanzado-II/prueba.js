// Apply es igual a call, solo que el segundo argumento es un

// arreglo
var persona = {
  nombre: "Guille",

  apellido: "Aszyn",
};

var logNombre = function (arg1, arg2) {
  console.log(arg1 + " " + this.nombre + " " + arg2);
};

logNombre.apply(persona, ["Hola", ", Cómo estas?"]);

//Hola Guille , Cómo estas?
