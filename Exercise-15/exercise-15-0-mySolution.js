/*
# Enunciado Ejercicio 15:
   Dada una cadena de texto, devolver el caracter más usado

#Ejemplos:
   mostUsedChar('victorroblesweb.es');

   Devuelve:
      Lo que más se repite es: e
   
# Sugerencias de cómo hacerlo: 
   - Crear una función que reciba el texto
   - Mapear letras en un json
   - Recorrer el campo
   - Hacemos condición para ver que contador es mayor.
*/

function mostUsedChar( completeStr ) {

   let charCounterMap = {};
   
   // Complete the map with each letter and counter
   for( let i = 0; i < completeStr.length; i++) {
      
      let char = completeStr[i];
      
      if( charCounterMap.hasOwnProperty(char) ) {
         charCounterMap[char]++;
      } else {
         charCounterMap[char] = 1;
      }
   }
   
   // Search for the greater the value
   let maxCountChar = 0;
   
   for( let char in charCounterMap ) {

      if( charCounterMap[char] > maxCountChar ) {
         maxCountChar = charCounterMap[char];
         mostCharRepeat = char;
      }
   }
   
   // Check if there are others with the same repeat value
   let arrayChar = [];
   for( let char in charCounterMap) {

      if( charCounterMap[char] === maxCountChar ) {
         arrayChar.push(char);
      }
   }
   
   let strAux = '';

   if( arrayChar.length > 1 ) {

      strAux += '[ ';

      for(let i = 0; i < arrayChar.length; i++) {
         strAux += arrayChar[i];

         if( i !== (arrayChar.length - 1 )) {
            strAux += ', ';
         }
      }

      strAux += ' ]';
   } else {
      strAux = arrayChar[0];
   }

   let arrayResponse = '';

   arrayResponse = `The most used char is: ${strAux} (${maxCountChar})`;
   return arrayResponse;
   
}

console.log( mostUsedChar('victorroblesweb.es') );