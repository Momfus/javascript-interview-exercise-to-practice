/*
# Enunciado Ejercicio 48:

      Dado un string, devolver cuales son las letras que aparecen solo una vez y
   cual es la primera    
   
# Ejemplos:

   justOne('frase frase HOY');

      // Return:
         [['H', 'O', 'Y'], 'H']
       
*/

function justOne( text ) {

   let lettersCountMap = {};
   let lettersUnique = [];

   text = text.replace(/\s+/g, '');

   // Count the letters
   text.split('').forEach( letter => {
   
      lettersCountMap[letter] = ( lettersCountMap[letter] || 0 ) + 1;

   });

   // set unique letters
   Object.keys(lettersCountMap).forEach( letter => {

      if( lettersCountMap[letter] === 1 ){
         lettersUnique.push(letter);
      }

   });

   return [ lettersUnique, lettersUnique[0] ];

}

console.log(justOne('frase frase HOY'));