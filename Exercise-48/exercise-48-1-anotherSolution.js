// Resolución realizada por quien hizo el ejercicio:

function soloUnaVez( texto ) {

   // Definir variables
   let contadores = {},
       resultado = [],
       letras = texto.split('').filter( letra => letra.trim().length >= 1);

   // Generar contadores
   for( let letra of letras ) {
      if( !contadores[letra] ) {
         contadores[letra] = 1;
      } else {
         contadores[letra]++;
      }

   }    

   // Eliminar las letras que se repitan.
   for(let letra in contadores ) {
      if( contadores[letra] === 1 ) {
         resultado.push(letra);
      } 
   }

   return [resultado, resultado[0]];

}


console.log( soloUnaVez('frase frase HOY') );