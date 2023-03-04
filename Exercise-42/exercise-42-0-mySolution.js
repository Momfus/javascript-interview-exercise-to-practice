/*
# Enunciado Ejercicio 42:

   Dados dos números, sacar un número aleatorio entre ellos.
   
# Ejemplos:

   randomNumber(1, 100);

      Return: 46 (o cualquier número entero entre 1 y 100)
   
         
# Sugerencias de cómo hacerlo: 
   -   
*/


function randomNumber(numberMin, numberMax) {

   const rangeNumber = Math.abs(numberMax - numberMin) + 1;
   
   return numberMin + Math.floor( Math.random() * rangeNumber );

}

console.log( randomNumber(1, 100) );