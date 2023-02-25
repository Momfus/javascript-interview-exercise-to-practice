
// Resolución realizada por quien hizo el ejercicio:

function invertir( texto ) {

   let invertido = "";  
   
   for( let letra of texto) {
      invertido = letra + invertido;
   }

   return invertido;

}

// En caso de usar métodos de javascript
function invertirConFunciones(texto) {

   return texto.split('').reverse().join('');

}

// Llamada
console.log(
   "Texto invertido: ",
   invertir("Momfus")
);

console.log(
   "Texto invertido: ",
   invertirConFunciones("Momfus")
);