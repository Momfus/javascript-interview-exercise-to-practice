// Resolución realizada por quien hizo el ejercicio:#

function permutacion(secuencia, numero ) {

   for(let i = 0; i < numero; i++) {
      
      if( secuencia.indexOf(i + 1) < 0 ) { // No encuentra el index del elemento (i+1) dentro del arreglo (dando -1)
         return false; // No es una permutación
      }
   }

   return true;

}


console.log( permutacion([1, 2, 3, 4, 5], 5) );
console.log( permutacion([1, 2, 3, 5], 5) );