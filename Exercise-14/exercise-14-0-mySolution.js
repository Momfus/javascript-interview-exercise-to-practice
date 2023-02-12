/*
# Enunciado Ejercicio 14:
    Dado un string y un número, repetir el string tantas veces como el número
   indique.

#Ejemplos:
   repeatString('victor', 2)
      Devuelve: 
         victorvictor
   
# Sugerencias de cómo hacerlo: 
   - Crear una función que reciba los dos parámetros.
   - Bucles hasta el numero
   - Concatenar string.
*/

function repeatString(str, quantity) {

   return str.repeat(quantity); 

}

console.log( repeatString('victor', 2) );