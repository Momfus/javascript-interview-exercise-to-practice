// Resolución realizada por quien hizo el ejercicio:#

function mayusMin( texto ) {

   let mayusculas = 0;
   let minusculas = 0;
   let resultado = '';

   for(const letra of texto ) {

      if( /[A-Z]/.test(letra) ) { // Expresion regular solo para mayúsculas
         mayusculas++;
      } else {
         minusculas++;
      }

   }

   if( mayusculas > minusculas ) {
      resultado = texto.toUpperCase();
   } else {
      resultado = texto.toLowerCase();
   }

   return resultado;

}

console.log( mayusMin('JOAQuin'));
console.log( mayusMin('Victor'));
