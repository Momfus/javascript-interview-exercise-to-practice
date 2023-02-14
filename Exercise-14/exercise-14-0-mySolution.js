/*
# Enunciado Ejercicio 14:
    Dado un string y un número, repetir el string tantas veces como el número
   indique.

#Ejemplos:
   repeatString('matias', 2)
      Devuelve: 
         matiasmatias
   
# Sugerencias de cómo hacerlo: 
   - Crear una función que reciba los dos parámetros.
   - Bucles hasta el numero
   - Concatenar string.
*/

function repeatString(str, quantity) {

   return str.repeat(quantity); 

}

console.log( repeatString('matias', 2) );