// Resolución realizada por quien hizo el ejercicio:#

function mayorMenor( numero1, numero2 ) {

   let resultado = '';

   if( numero1 === numero2 ) {
      resultado = 'Los numeros son iguales'; 
   } else if( numero1 > numero2 ) {

      resultado = 'EL número mayor es: ' + numero1;
      resultado += '\nEL número menor es: ' + numero2;

   } else if( numero1 < numero2) {

      resultado = 'EL número mayor es: ' + numero2;
      resultado += '\nEL número menor es: ' + numero1;
      
   } else {
      resultado = "Introduce números correctos";
   }

   return resultado;

}

console.log( mayorMenor(99, 189));