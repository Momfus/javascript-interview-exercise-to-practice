// Resolución realizada por quien hizo el ejercicio:

function masUsado( texto ) {

   let mapeo_letras = {};
   let maximo_repeticiones = 0;
   let letra_mas_repetida = '';

   for( let letra of texto ) {

      if( !mapeo_letras[letra] ) {
         mapeo_letras[letra] = 1;
      } else {
         mapeo_letras[letra]++;
      }

   }

   for( let letra in mapeo_letras ) {
      
      if( mapeo_letras[letra].toString().trim().length == 1 // Esta condición es por si hay espacios que en ese caso lo toma como mas repetidas y asi ignorarla
            && mapeo_letras[letra] > maximo_repeticiones ) {

         maximo_repeticiones = mapeo_letras[letra];
         letra_mas_repetida = letra; 

      }

   }

   return letra_mas_repetida;

}


console.log( 'La letra más repetida es: ', masUsado('victorroblesweb.es'));