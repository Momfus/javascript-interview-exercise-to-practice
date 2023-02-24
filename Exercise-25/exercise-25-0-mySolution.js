/*
# Enunciado Ejercicio 25:

    Dado un string, ponerlo completo en mayúscula o minúscula dependiendo de si
   hay más mayúsculas o minúsculas por defecto en el string.

    Si hay más mayúsculas ponerlo todo en mayúsculas.
    Si hay más minússculas ponerlo todo en minúnsculas.

#Ejemplos:
   
   mayusMin('MOMFus')   // Return: MOMFUS
   mayusMin('Momfus')   // Return: momfus

# Sugerencias de cómo hacerlo: 
   - Crear una función con+ parámetro texto
   - Crear dos contadores para mayúsculas y minúsculas.
   - Recorrer el texto y comprobar si las letras que vamos recorriendo son mayúsculas.
   - Aumentar contadores.
   - Convertir a mayúsculas o minúsculas y devolver resultado.
*/
function checkIsOnlyAlphabet(str) {

   const specialCharRegex =  /^[a-zA-Z]+$/;
   return specialCharRegex.test(str);

}

function mayusMin( str ) {

   let counterLowcase = 0;
   let counterUppercase = 0;

   str.split('').forEach( x => {

      if ( checkIsOnlyAlphabet(x) ) {

         if( x === x.toUpperCase() ) {
            counterUppercase++;
         } else {
            counterLowcase++;
         }
         
      }
   
   });

   return ( counterUppercase > counterLowcase ) ? str.toUpperCase() : str.toLowerCase();
}

console.log( mayusMin('MOMFus'));
console.log( mayusMin('Momfus'));