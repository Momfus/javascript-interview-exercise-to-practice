
// Resolución realizada por quien hizo el ejercicio:

function censurado(texto = false, busqueda = false) {

   let resultado = '';

   if( !texto && !busqueda ) {
      resultado = 'No puedes leer el texto y la búsqeuda';
   } else if( !texto && busqueda) {
      resultado = 'No puedes leer el texto';
   } else if( texto && !busqueda ) {
      resultad = 'No puedes hacer la busqueda';
   } else if( texto && busqueda ) {
      resultado = texto.replace(new RegExp(busqueda, 'g'), '[-CENSURADO-]');
   }



   return resultado;

}


console.log( censurado('hola hola', 'hola') );