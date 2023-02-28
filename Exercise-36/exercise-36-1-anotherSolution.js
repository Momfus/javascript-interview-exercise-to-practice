// Resolución realizada por quien hizo el ejercicio:#

function cuentaLetras( texto ) {

   let   consonantes = 0,
         vocales = 0, 
         texto_limpio = '';

   // Toma en cuenta las vocales con tiltes
   texto_limpio = texto.split('')
                        .filter( letra => (/[áéíóú\w]/gi).test(letra) && isNaN(letra))
                        .join('');

   for( let letra of texto_limpio ) {

      if( /[áéíóíaeiou]/gi.test(letra) ) {
         vocales++;
      } else {
         consonantes++;
      }

   }

   return [consonantes, vocales];

}

let letras = cuentaLetras('hol!! . , - que tal á ó');

console.log("Consonantes: ", letras[0]);
console.log("Vocales: ", letras[1]);