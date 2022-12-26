
// Resolución realizada por quien hizo el ejercicio:

function tantoPorciento( porcentaje, numero ) {

   let operacion = ( numero * (porcentaje/100));
   let resultado = `El ${porcentaje}% de ${numero} es ${operacion}`;

   return resultado;
}

console.log(
   tantoPorciento( 43, 897)
);