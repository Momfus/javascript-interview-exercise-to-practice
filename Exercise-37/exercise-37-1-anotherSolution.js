// Resolución realizada por quien hizo el ejercicio:#

function elQueMasAparece(datos) {

   let   mapeo = {},
         mas_frecuente = '';
         valor_mas_frecuente = 0;

   if( typeof datos === 'string' ) {
      
      datos = datos.split(' ');

   }

   for(let elemento of datos ) {

      if( mapeo[elemento] ) {

         mapeo[elemento]++;

      } else {

         mapeo[elemento] = 1;

      }

   }

   for( let elemento in mapeo ) {
      
      if( mapeo[elemento] > valor_mas_frecuente) {
         valor_mas_frecuente = mapeo[elemento];
         mas_frecuente = elemento;
      }

   }

   return {
      mas_frecuente,
      valor_mas_frecuente
   };

}

console.log( elQueMasAparece('momfus arboleo momfus') );
console.log( elQueMasAparece([1, 2, 3, 4, 1]) );