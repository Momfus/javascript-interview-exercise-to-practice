// Resolución realizada por quien hizo el ejercicio:#


function factorial(numero) { // Es una no recursirva, que es bueno para no usar apilación de stack de ejecución.

   let resultado = 1;

   for( let i = 1; i <= numero; i++) {

      resultado *= i;

   }

   return resultado;
}


console.log(factorial(3) );