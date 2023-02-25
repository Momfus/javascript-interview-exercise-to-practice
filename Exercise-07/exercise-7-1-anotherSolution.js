
// Resolución realizada por quien hizo el ejercicio:

function impares(numero1, numero2) {

   let contador = 0;

   while( numero1 < numero2 ) {

      if( numero1 % 2 !== 0) {
         contador++;
      }

      numero1++;
   }

   return contador;

}

console.log( 
   'Numeros impares: ',
   impares(1, 100)
);