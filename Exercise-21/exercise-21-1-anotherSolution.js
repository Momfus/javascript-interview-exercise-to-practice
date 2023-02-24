// Resolución realizada por quien hizo el ejercicio:#

function recortar( texto, hasta) {
   let resultado = '';

   if( typeof texto === 'string' && typeof hasta === 'number') {
      resultado = texto.substring(0, hasta);
   } else {
      resultado = 'Introduce datos correctos';
   }

   return resultado;
}

console.log( recortar('Cursos Desarrollo Web', 6));