/*
# Enunciado Ejercicio 29:

   Dado un número, indicar si es un número capicua o no.
   Los números capicúa se leen igual de izquierda a derecha y viceversa.

#Ejemplos:
   
   capi(2002); // Return: true;
   capi(2014); // Return: false;
   
# Sugerencias de cómo hacerlo: 
   - Crear una función con parámetro número.
   - Convertir a string
   - Convertir número en array de número.
   - Darle la vuelta
   - Unirlo y convertirlo a entero. 

*/

function capi( n ) {

   numberReverse = parseInt( 
                        n.toString()
                           .split('')
                           .reverse()
                           .join('') 
                  );

   return numberReverse === n;

}


console.log( capi(2002) );
console.log( capi(2014) );