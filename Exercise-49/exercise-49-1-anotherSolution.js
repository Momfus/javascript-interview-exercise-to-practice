// Resolución realizada por quien hizo el ejercicio:

function existePropiedad(objeto, propiedad) {
  if (
    typeof objeto === "object" &&
    typeof propiedad === "string" &&
    objeto.hasOwnProperty(propiedad)
  ) {
    return true;
  }

  return false;
}

let usuario = {
  nombre: "Momfus",
  apellido: "Arboleo",
};

console.log(existePropiedad(usuario, "nombre"));
