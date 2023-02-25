/*
# Enunciado Ejercicio 28:
   
#Ejemplos:
   
    Dado un número devolver su factorial.
    El Factorial de un número es la multiplicación de todos los números hasta 
   llegar a él.
   
   Retorna:
   
   factorial(3); // Devuelve 6
      
# Sugerencias de cómo hacerlo: 
   - Crear una función con parámetro número
   - Bucle del 1 al número.
   - Multiplicar el número anterior con el actual.
   - Devolver el resultado. 

*/

function factorial(n) {

   if( n === 0 ) {
      return 1;
   } else {
      return factorial(n-1) * n;
   }

}

console.log( factorial(10) );