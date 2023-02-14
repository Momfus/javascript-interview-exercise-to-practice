// Resolución realizada por quien hizo el ejercicio:#

function buzz( numero ) {

   let resultado = '';

   if( numero % 3 === 0 && numero % 5 === 0) {
      
      resultado = 'BuzzLightyear';

   } else if( numero % 3 === 0 ) {
      
      resultado = 'buzz';

   } else if( numero % 5 === 0 ) {

      resultado = 'lightyear';

   } else {
      return numero;
   }

   return resultado;

}

function imprimir(numero) {
   for( let i = 1; i <= numero; i++ ) {
      console.log(buzz(i));
   }
}


imprimir(15);